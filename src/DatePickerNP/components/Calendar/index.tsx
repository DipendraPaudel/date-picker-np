import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarHeader from "./Header";

const DatePickerCalendar = ({
  date = "yyyy-mm-dd",
  setDate,
  calendarStyles,
}: DatePickerCalendarProps) => {
  const handleChange = (value: number, type: string) => {
    const dateSplittedArr = date.split("-");

    // replace first portion if type is year and second portion if type is month
    dateSplittedArr[type === "year" ? 0 : 1] = value.toString();

    // replace the day with dd when month or year changes reset the day
    dateSplittedArr[2] = "dd";

    setDate(dateSplittedArr.join("-"));
  };

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader date={date} handleChange={handleChange} />
    </div>
  );
};

export default DatePickerCalendar;
