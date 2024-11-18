import { useLayoutEffect, useState } from "react";

import { DatePickerCalendarProps } from "../../types/DatePickerCalendar";
import CalendarDates from "./Dates";
import CalendarFooter from "./Footer";
import CalendarHeader from "./Header";
import {
  extractDateData,
  getTodayBSDate,
  isValidNepaliDate,
  liesInBetween,
} from "../../utils";

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
    const todayBSDate = getTodayBSDate();

    /*
      Display date priority 
        --> passed value if valid
        --> today bs date if lies in between min and max
        --> min date if valid
        --> max date if valid
     */

    const displayDate =
      isValid && liesInBetween(value, min, max)
        ? value
        : liesInBetween(todayBSDate, min, max)
        ? todayBSDate
        : min && isValidNepaliDate(min)
        ? min
        : max && isValidNepaliDate(max)
        ? max
        : todayBSDate;

    setVirtualDate(displayDate);

    // eslint-disable-next-line
  }, [value]);

  return (
    <div className="date-picker-calendar" style={calendarStyles}>
      <CalendarHeader
        date={virtualDate}
        handleChange={(date: string) => setVirtualDate(date)}
        min={min}
        max={max}
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
