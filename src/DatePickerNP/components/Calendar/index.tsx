import { useLayoutEffect, useState } from "react";

import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarDates from "./Dates";
import CalendarFooter from "./Footer";
import CalendarHeader from "./Header";
import {
  extractDateData,
  getDisplayDate,
  isValidNepaliDate,
} from "../../utils";

const DatePickerCalendar = ({
  value = "yyyy-mm-dd",
  onChange,
  calendarPositions,
  min,
  max,
  lang,
  calendarStyles,
  position,
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
    const displayDate = getDisplayDate(value, min, max, isValid);

    setVirtualDate(displayDate);

    // eslint-disable-next-line
  }, [value]);

  // if there is a value and when virtual date is returned back to the same month make that day active
  const calendarDisplayDate =
    virtualDate.slice(0, 7) === value?.slice(0, 7) ? value : virtualDate;

  return (
    <div
      className="date-picker-calendar"
      style={{
        ...calendarPositions,
        position: position === "fixed" ? position : undefined,
      }}
    >
      <CalendarHeader
        date={virtualDate}
        handleChange={(date: string) => setVirtualDate(date)}
        min={min}
        max={max}
        lang={lang}
        calendarStyles={calendarStyles}
      />

      <CalendarDates
        date={calendarDisplayDate}
        handleChange={handleDateChange}
        min={min}
        max={max}
        lang={lang}
        calendarStyles={calendarStyles}
      />

      <CalendarFooter
        hasValidValue={isValid}
        onChange={onChange}
        min={min}
        max={max}
        lang={lang}
        calendarStyles={calendarStyles}
      />
    </div>
  );
};

export default DatePickerCalendar;
