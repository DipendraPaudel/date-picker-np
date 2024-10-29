import { useEffect, useState } from "react";

import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarDates from "./Dates";
import CalendarFooter from "./Footer";
import CalendarHeader from "./Header";
import {
  extractDateData,
  getTodayBSDate,
  isValidNepaliDate,
} from "../../utils/dates";

const DatePickerCalendar = ({
  value = "yyyy-mm-dd",
  onChange,
  calendarStyles,
}: DatePickerCalendarProps) => {
  const isValid = isValidNepaliDate(value);

  const [virtualDate, setVirtualDate] = useState("");

  const handleDateChange = (day: number) => {
    const { year, month } = extractDateData(virtualDate);
    onChange(`${year}-${month}-${day.toString().padStart(2, "0")}`);
  };

  useEffect(() => {
    setVirtualDate(isValid ? value : getTodayBSDate());

    // eslint-disable-next-line
  }, [value]);

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader
        date={virtualDate}
        handleChange={(date: string) => setVirtualDate(date)}
      />

      <CalendarDates date={virtualDate} handleChange={handleDateChange} />

      <CalendarFooter hasValidValue={isValid} onChange={onChange} />
    </div>
  );
};

export default DatePickerCalendar;
