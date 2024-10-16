import { DatePickerInputProps } from "../types/DatePickerInput";

const DatePickerInput = ({
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
      ></div>
    </div>
  );
};

export default DatePickerInput;
