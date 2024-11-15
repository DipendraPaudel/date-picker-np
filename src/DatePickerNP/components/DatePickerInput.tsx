import { useEffect, useRef } from "react";

import { DatePickerInputProps } from "../types/DatePickerInput";
import { isValidNepaliDate } from "../utils/dates";

const DatePickerInput = ({
  value,
  onChange,
  inputContainerStyles,
  setIsCalendarOpen,
  disabled,
  placeholder,
  inputElement,
}: DatePickerInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setInputValue = (value?: string) => {
    if (inputRef.current) {
      inputRef.current.value = value ?? "";
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current as HTMLInputElement;

    // open calendar menu when space or enter is pressed in the input element
    const handleInputFocus = () => setIsCalendarOpen(true);

    const handleInputBlur = () => {
      if (!inputElement) return;

      const currentValue = inputElement.value;

      const isValid = isValidNepaliDate(currentValue);

      if (isValid) onChange(currentValue);

      setInputValue(isValid ? currentValue : value);
    };

    // open calendar menu when space or enter is pressed in the input element
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && inputElement.value) {
        setIsCalendarOpen(false);
        inputElement.blur();
      }
    };

    inputElement.addEventListener("focus", handleInputFocus);
    inputElement.addEventListener("blur", handleInputBlur);
    inputElement.addEventListener("keydown", handleKeyDown);

    return () => {
      inputElement.removeEventListener("focus", handleInputFocus);
      inputElement.removeEventListener("blur", handleInputBlur);
      inputElement.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setInputValue(isValidNepaliDate(value) ? value : "");
  }, [value]);

  const inputHeight = inputContainerStyles?.height;

  return (
    <>
      {inputElement ?? (
        <input
          ref={inputRef}
          tabIndex={0}
          type="text"
          placeholder={placeholder ?? "Select Date"}
          className={`date-picker-input ${
            disabled ? "date-picker-input-disabled" : ""
          }`}
          style={{
            ...inputContainerStyles,
            lineHeight: inputHeight
              ? `${inputContainerStyles.height}px`
              : undefined,
          }}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default DatePickerInput;
