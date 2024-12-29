import { useEffect, useLayoutEffect, useRef, useState } from "react";

import DatePickerInput from "./components/DatePickerInput";
import DatePickerCalendar from "./components/Calendar";
import { DatePickerNPProps } from "./types/DatePickerNP";
import { DEFAULT_INPUT_HEIGHT } from "./constants/calendar";
import {
  calculateCalendarPosition,
  clickEvent,
  formatDate,
  getMenuTopPosition,
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
  menuPosition = "auto",
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
    const handleScrollAndResize = () => {
      if (!isCalendarOpen) return;

      const { x, y } = calculateCalendarPosition(
        containerRef?.current as HTMLDivElement
      );

      setCoordinates({ x, y });
    };

    handleScrollAndResize();

    window.addEventListener("resize", handleScrollAndResize);
    window.addEventListener("scroll", handleScrollAndResize);
    return () => {
      window.removeEventListener("resize", handleScrollAndResize);
      window.removeEventListener("scroll", handleScrollAndResize);
    };
  }, [isCalendarOpen]);

  useEffect(() => {
    const input = inputRef?.current as HTMLInputElement;
    const container = containerRef?.current as HTMLDivElement;

    if (!input || !isCalendarOpen) return;

    const handleClick = (event: MouseEvent) => {
      const currentValue = clickEvent({
        event,
        container,
        input,
      });

      if (currentValue !== undefined) {
        if (currentValue !== value) handleDateChange(currentValue);
        else setIsCalendarOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };

    // eslint-disable-next-line
  }, [isCalendarOpen]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = isValidNepaliDate(value) ? value ?? "" : "";
    }
    // eslint-disable-next-line
  }, [value]);

  const inputContainerHeight =
    inputContainerStyles?.height || DEFAULT_INPUT_HEIGHT;

  const top = getMenuTopPosition(
    menuPosition,
    coordinates.y,
    inputContainerHeight
  );

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
            top,
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
