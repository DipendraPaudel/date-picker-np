import { forwardRef, useEffect } from "react";

import { DatePickerInputProps } from "../types/DatePickerInput";

const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  (
    {
      onChange,
      inputContainerStyles,
      setIsCalendarOpen,
      disabled,
      placeholder,
      inputElement,
    },
    ref
  ) => {
    useEffect(() => {
      const inputElement = (ref &&
        "current" in ref &&
        ref.current) as HTMLInputElement;

      if (!inputElement) return;

      // open calendar menu when input element is focused
      const handleInputFocus = () => {
        setIsCalendarOpen(true);
        inputElement.setSelectionRange(10, 10); // to point the cursor at the end of the date value
      };

      // open calendar menu when space or enter is pressed in the input element
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" && inputElement.value) {
          onChange(inputElement.value);
          setIsCalendarOpen(false);
          inputElement.blur();
        }
      };

      inputElement.addEventListener("focus", handleInputFocus);
      inputElement.addEventListener("click", handleInputFocus);
      inputElement.addEventListener("keydown", handleKeyDown);

      return () => {
        inputElement.removeEventListener("focus", handleInputFocus);
        inputElement.removeEventListener("click", handleInputFocus);
        inputElement.removeEventListener("keydown", handleKeyDown);
      };

      // eslint-disable-next-line
    }, []);

    const inputHeight = inputContainerStyles?.height;

    return (
      <>
        {inputElement ? (
          <div ref={ref}>{inputElement}</div>
        ) : (
          <input
            ref={ref}
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
  }
);

export default DatePickerInput;
