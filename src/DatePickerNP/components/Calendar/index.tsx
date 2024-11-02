import { useLayoutEffect, useState } from "react";

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
  min,
  max,
}: DatePickerCalendarProps) => {
  const isValid = isValidNepaliDate(value);

  const [virtualDate, setVirtualDate] = useState("");

  const handleDateChange = (day: number) => {
    const { year, month } = extractDateData(virtualDate);
    onChange(
      `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`
    );
  };

  useLayoutEffect(() => {
    setVirtualDate(
      isValid ? value : max && isValidNepaliDate(max) ? max : getTodayBSDate()
    );

    // eslint-disable-next-line
  }, [value]);

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader
        date={virtualDate}
        handleChange={(date: string) => setVirtualDate(date)}
      />

      <CalendarDates
        date={virtualDate}
        handleChange={handleDateChange}
        min={min}
        max={max}
      />

      <CalendarFooter
        hasValidValue={isValid}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default DatePickerCalendar;
