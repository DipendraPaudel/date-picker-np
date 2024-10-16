import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarHeader from "./Header";

const DatePickerCalendar = ({ calendarStyles }: DatePickerCalendarProps) => {
  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader />
    </div>
  );
};

export default DatePickerCalendar;
