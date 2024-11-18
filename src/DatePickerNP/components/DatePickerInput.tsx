import { forwardRef, useEffect } from "react";

import { DatePickerInputProps } from "../types/DatePickerInput";
import { CalendarIcon } from "./Icons";
import { DEFAULT_CALENDAR_ICON_COLOR } from "../constants/calendar";

const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  (
    {
      onChange,
      inputContainerStyles,
      setIsCalendarOpen,
      disabled,
      placeholder,
      inputElement: passedInputElement,
      hasCalendarIcon = true,
      calendarIcon,
      calendarColor,
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
        setTimeout(() => setIsCalendarOpen(true), 300); // calendar menu is taking little time while closing. so to match the exact timing settimeout is being used
        inputElement.setSelectionRange(10, 10); // to point the cursor at the end of the date value
      };

      // open calendar menu when space or enter is pressed in the input element
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" && inputElement.value) {
          onChange(inputElement.value);
          setIsCalendarOpen(false);
          inputElement.blur();
        } else if (event.key === "Tab") {
          // when tab is pressed input element is blurred then close the calendar menu
          onChange(inputElement.value);
          setIsCalendarOpen(false);
        }
      };

      inputElement.addEventListener("focus", handleInputFocus);
      inputElement.addEventListener("keydown", handleKeyDown);

      passedInputElement &&
        inputElement.addEventListener("click", handleInputFocus); // only capture "click" event if element is passed from props

      return () => {
        inputElement.removeEventListener("focus", handleInputFocus);
        inputElement.removeEventListener("keydown", handleKeyDown);

        passedInputElement &&
          inputElement.removeEventListener("click", handleInputFocus);
      };

      // eslint-disable-next-line
    }, []);

    return (
      <>
        {passedInputElement ? (
          <div ref={ref}>{passedInputElement}</div>
        ) : (
          <div className="date-picker-input-container">
            <input
              ref={ref}
              type="text"
              placeholder={placeholder ?? "Select Date"}
              className={`date-picker-input ${
                disabled ? "date-picker-input-disabled" : ""
              }`}
              style={{
                ...inputContainerStyles,
              }}
              disabled={disabled}
            />

            {hasCalendarIcon && (
              <div
                className="date-picker-input-right-icon"
                style={{
                  color: calendarColor || DEFAULT_CALENDAR_ICON_COLOR,
                }}
              >
                {calendarIcon ?? <CalendarIcon />}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default DatePickerInput;
