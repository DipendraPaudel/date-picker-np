import { useEffect, useState } from "react";

import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarDates from "./Dates";
import CalendarFooter from "./Footer";
import CalendarHeader from "./Header";
import { extractDateData, isValidNepaliDate } from "../../utils/dates";

const DatePickerCalendar = ({
  value = "yyyy-mm-dd",
  onChange,
  calendarStyles,
}: DatePickerCalendarProps) => {
  const [virtualDate, setVirtualDate] = useState(
    isValidNepaliDate(value) ? value : ""
  );

  const handleVirtualDateChange = (value: number, type: string) => {
    const dateSplittedArr = value.toString().split("-");

    // replace first portion if type is year and second portion if type is month
    dateSplittedArr[type === "year" ? 0 : 1] = value.toString();

    // replace the day with dd when month or year changes reset the day
    dateSplittedArr[2] = "dd";

    setVirtualDate(dateSplittedArr.join("-"));
  };

  const handleDateChange = (day: number) => {
    const { year, month } = extractDateData(virtualDate);
    onChange(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    setVirtualDate(isValidNepaliDate(value) ? value : "");
  }, [value]);

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader
        date={virtualDate}
        handleChange={handleVirtualDateChange}
      />

      <CalendarDates date={virtualDate} handleChange={handleDateChange} />

      <CalendarFooter />
    </div>
  );
};

export default DatePickerCalendar;
