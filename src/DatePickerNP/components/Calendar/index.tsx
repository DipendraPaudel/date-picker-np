import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarHeader from "./Header";

const DatePickerCalendar = ({
  date,
  setDate,
  calendarStyles,
}: DatePickerCalendarProps) => {
  const handleChange = (value: number, type: string) => {
    console.log(value, type);
  };

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader handleChange={handleChange} />
    </div>
  );
};

export default DatePickerCalendar;
