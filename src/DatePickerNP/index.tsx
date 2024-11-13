import { useLayoutEffect, useRef, useState } from "react";

import DatePickerInput from "./components/DatePickerInput";
import DatePickerCalendar from "./components/Calendar";
import { DatePickerNPProps } from "./types/DatePickerNP";

import "./styles/index.css";
import "./styles/calendar-dates.css";
import "./styles/calendar-header.css";
import "./styles/calendar-footer.css";

const DatePickerNP = ({
  value,
  onChange,
  inputHeight = 36,
  min,
  max,
  disabled,
}: DatePickerNPProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // function to change the date and close the calendar menu
  const handleDateChange = (date?: string) => {
    onChange(date);
    setIsCalendarOpen(false);
  };

  // change the position of the calendar menu when browser is resized
  useLayoutEffect(() => {
    const handleResize = () => {
      setCoordinates({
        x: containerRef?.current?.getBoundingClientRect().x as number,
        y: containerRef?.current?.getBoundingClientRect().y as number,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="date-picker-container" ref={containerRef}>
      <DatePickerInput
        toggleCalendar={() => setIsCalendarOpen(!isCalendarOpen)}
        inputStyles={{
          height: inputHeight,
        }}
        value={value}
        disabled={disabled}
      />

      {!disabled && isCalendarOpen && (
        <DatePickerCalendar
          calendarStyles={{
            top: coordinates.y + inputHeight,
            left: coordinates.x,
            zIndex: 1000000,
          }}
          value={value}
          onChange={handleDateChange}
          min={min}
          max={max}
        />
      )}
    </div>
  );
};

export default DatePickerNP;

// COMPONENTS NEEDED
// 1. Input component typable
// 2. calendar date picker
// 3. month and year dropdown
