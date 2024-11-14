import { useEffect, useRef } from "react";

import { DatePickerInputProps } from "../types/DatePickerInput";
import { isValidNepaliDate } from "../utils/dates";

const DatePickerInput = ({
  value,
  inputContainerStyles,
  toggleCalendar,
  disabled,
  placeholder,
  inputElement,
}: DatePickerInputProps) => {
  const inputRef = useRef<HTMLDivElement | null>(null);

  // open calendar menu when space or enter is pressed in the input element
  const handleKeyDown = (event: KeyboardEvent) => {
    if (["Enter", " "].includes(event.key)) {
      toggleCalendar();
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current as HTMLDivElement;

    inputElement.addEventListener("keydown", handleKeyDown);
    return () => inputElement.removeEventListener("keydown", handleKeyDown);

    // eslint-disable-next-line
  }, []);

  const inputHeight = inputContainerStyles?.height;

  return (
    <div
      ref={inputRef}
      className={`date-picker-input ${
        disabled ? "date-picker-input-disabled" : ""
      }`}
      style={{
        ...inputContainerStyles,
        lineHeight: inputHeight
          ? `${inputContainerStyles.height}px`
          : undefined,
      }}
      onClick={toggleCalendar}
      tabIndex={0}
    >
      {inputElement ?? (
        <p>{isValidNepaliDate(value) ? value : placeholder ?? "Select Date"}</p>
      )}
    </div>
  );
};

export default DatePickerInput;
