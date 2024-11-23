import { useEffect, useLayoutEffect, useRef, useState } from "react";

import DatePickerInput from "./components/DatePickerInput";
import DatePickerCalendar from "./components/Calendar";
import { DatePickerNPProps } from "./types/DatePickerNP";
import { CALENDAR_HEIGHT, DEFAULT_INPUT_HEIGHT } from "./constants/calendar";
import {
  calculateCalendarPosition,
  clickEvent,
  formatDate,
  isValidNepaliDate,
  liesInBetween,
} from "./utils";

import "./styles/index.css";
import "./styles/calendar-dates.css";
import "./styles/calendar-header.css";
import "./styles/calendar-footer.css";

const DatePickerNP = ({
  value,
  onChange,
  min,
  max,
  disabled,
  placeholder,
  inputElement,
  inputContainerStyles = {},
  hasCalendarIcon,
  calendarIcon,
  calendarColor,
  lang = "en",
}: DatePickerNPProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // function to change the date and close the calendar menu
  const handleDateChange = (date?: string) => {
    if (disabled) return;

    const formattedDate = formatDate(date);

    onChange(
      liesInBetween(formattedDate as string, min, max) ? formattedDate : ""
    );
    setIsCalendarOpen(false);

    if (inputRef.current) inputRef.current.value = formattedDate ?? "";
  };

  // change the position of the calendar menu when browser is resized
  useLayoutEffect(() => {
    const handleResize = () => setIsCalendarOpen(false);

    const handleScroll = () => {
      if (!isCalendarOpen) return;

      const { x, y } = calculateCalendarPosition(
        containerRef?.current as HTMLDivElement
      );

      setCoordinates({ x, y });
    };

    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCalendarOpen]);

  useEffect(() => {
    const input = inputRef?.current as HTMLInputElement;
    const container = containerRef?.current as HTMLDivElement;

    if (!input) return;

    const handleClick = (event: MouseEvent) => {
      const value = clickEvent({
        event,
        container,
        input,
      });

      if (value !== undefined) handleDateChange(value);
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = isValidNepaliDate(value) ? value ?? "" : "";
    }
    // eslint-disable-next-line
  }, [value]);

  const inputContainerHeight =
    inputContainerStyles?.height || DEFAULT_INPUT_HEIGHT;

  return (
    <div className="date-picker-container" ref={containerRef}>
      <DatePickerInput
        ref={inputRef}
        value={value}
        onChange={handleDateChange}
        setIsCalendarOpen={setIsCalendarOpen}
        inputContainerStyles={{
          ...inputContainerStyles,
          height: inputContainerHeight,
        }}
        disabled={disabled}
        placeholder={placeholder}
        inputElement={inputElement}
        hasCalendarIcon={hasCalendarIcon}
        calendarIcon={calendarIcon}
        calendarColor={calendarColor}
      />

      {!disabled && isCalendarOpen && (
        <DatePickerCalendar
          calendarStyles={{
            top:
              coordinates.y > 0 ? inputContainerHeight + 2 : -CALENDAR_HEIGHT,
            left: coordinates.x,
            zIndex: 1000000,
          }}
          value={value}
          onChange={handleDateChange}
          min={min}
          max={max}
          lang={lang}
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
