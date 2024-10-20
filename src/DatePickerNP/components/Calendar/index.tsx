import { useState } from "react";

import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarDates from "./Dates";
import CalendarFooter from "./Footer";
import CalendarHeader from "./Header";

const DatePickerCalendar = ({
  value = "yyyy-mm-dd",
  calendarStyles,
}: DatePickerCalendarProps) => {
  const [virtualDate, setVirtualDate] = useState(value ?? "");

  const handleChange = (value: number, type: string) => {
    const dateSplittedArr = value.toString().split("-");

    // replace first portion if type is year and second portion if type is month
    dateSplittedArr[type === "year" ? 0 : 1] = value.toString();

    // replace the day with dd when month or year changes reset the day
    dateSplittedArr[2] = "dd";

    setVirtualDate(dateSplittedArr.join("-"));
  };

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader date={virtualDate} handleChange={handleChange} />

      <CalendarDates date={virtualDate} />

      <CalendarFooter />
    </div>
  );
};

export default DatePickerCalendar;
