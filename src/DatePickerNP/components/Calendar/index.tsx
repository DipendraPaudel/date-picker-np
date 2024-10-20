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
        handleChange={(date: string) => setVirtualDate(date)}
      />

      <CalendarDates date={virtualDate} handleChange={handleDateChange} />

      <CalendarFooter />
    </div>
  );
};

export default DatePickerCalendar;
