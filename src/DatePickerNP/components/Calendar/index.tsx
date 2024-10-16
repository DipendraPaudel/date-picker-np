import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";

const DatePickerCalendar = ({ calendarStyles }: DatePickerCalendarProps) => {
  return <div className="date-picker-calendar" style={calendarStyles}></div>;
};

export default DatePickerCalendar;
