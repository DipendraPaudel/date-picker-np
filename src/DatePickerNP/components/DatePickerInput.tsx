import { DatePickerInputProps } from "../types/DatePickerInput";
import { isValidNepaliDate } from "../utils/dates";

const DatePickerInput = ({
  value,
  inputStyles,
  toggleCalendar,
  disabled,
}: DatePickerInputProps) => {
  return (
    <div
      className={`date-picker-input ${
        disabled ? "date-picker-input-disabled" : ""
      }`}
      style={inputStyles}
      onClick={toggleCalendar}
    >
      <p>{isValidNepaliDate(value) ? value : "Select Date"}</p>
    </div>
  );
};

export default DatePickerInput;
