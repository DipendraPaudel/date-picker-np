import { DatePickerInputProps } from "../types/DatePickerInput";
import { isValidNepaliDate } from "../utils/dates";

const DatePickerInput = ({
  value,
  inputStyles,
  toggleCalendar,
}: DatePickerInputProps) => {
  return (
    <div>
      {/* <input
        type="text"
        className="date-picker-input"
        style={inputStyles}
        placeholder="Select Date..."
      /> */}
      <div
        className="date-picker-input"
        style={inputStyles}
        onClick={toggleCalendar}
      >
        <p>{isValidNepaliDate(value) ? value : "Select Date"}</p>
      </div>
    </div>
  );
};

export default DatePickerInput;
