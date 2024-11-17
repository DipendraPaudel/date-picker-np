import { useEffect, useState } from "react";

import { SelectorProps } from "../../../../types/Calendar";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../Icons/Arrow";
import YearSelector from "./YearSelector";
import MonthSelector from "./MonthSelector";
import {
  FINAL_YEAR_OF_CALENDAR,
  INITIAL_YEAR_OF_CALENDAR,
} from "../../../../constants/calendar";
import { extractDateData, isValidNepaliDate } from "../../../../utils";

const Selector = ({
  year,
  handleChange,
  setIsDropdownOpen,
  min,
  max,
}: SelectorProps) => {
  const [startYear, setStartYear] = useState(
    Math.floor((year - INITIAL_YEAR_OF_CALENDAR) / 12) * 12
  );

  // to detect whether to display year selector or month selector
  const [activeSelector, setActiveSelector] = useState<"year" | "month">(
    "year"
  );

  // store selected year in the store so that handleChange can be called when selecting the month
  const [selectedYear, setSelectedYear] = useState(year);

  let minYear = INITIAL_YEAR_OF_CALENDAR;
  let maxYear = FINAL_YEAR_OF_CALENDAR;
  let minMonth = 1;
  let maxMonth = 12;

  const actualStartYear = startYear + INITIAL_YEAR_OF_CALENDAR;
  const actualEndYear = startYear + 11 + INITIAL_YEAR_OF_CALENDAR;

  // only change minYear if passed min value is valid
  if (min && isValidNepaliDate(min)) {
    const { year, month } = extractDateData(min);
    minYear = +year;

    if (selectedYear === +year) minMonth = +month;
  }

  // only change maxYear if passed max value is valid
  if (max && isValidNepaliDate(max)) {
    const { year, month } = extractDateData(max);
    maxYear = +year;

    if (selectedYear === +year) maxMonth = +month;
  }

  const isPrevArrowDisabled =
    actualStartYear <= minYear || activeSelector === "month";
  const isNextArrowDisabled =
    actualEndYear >= maxYear || activeSelector === "month";

  // function to handle years selector options to be displayed on negative and positive units
  const handleStartYearChange = (deltaY: number) => {
    // if prev or next arrow is disabled then disable the scrolling also to respective directions
    if (
      (deltaY < 0 && isPrevArrowDisabled) ||
      (deltaY > 0 && isNextArrowDisabled)
    )
      return;

    setStartYear((startYear) => {
      const changeYear = startYear + (deltaY > 0 ? 12 : -12);

      const actualYear = changeYear + INITIAL_YEAR_OF_CALENDAR;

      if (
        actualYear < INITIAL_YEAR_OF_CALENDAR ||
        actualYear > FINAL_YEAR_OF_CALENDAR
      )
        return startYear;

      return changeYear;
    });
  };

  // function to handle month change and close the selector
  const handleMonthChange = (month: number) => {
    handleChange(`${selectedYear}-${month.toString().padStart(2, "0")}-dd`);
    setTimeout(() => setIsDropdownOpen(false)); // settimeout is used because the click event is trigger after this and could not find the element which is resulting in the close of the entire calendar
  };

  // close the selector when 'Escape' key is clicked
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDropdownOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="date-picker-selector-container">
      <div className="date-picker-selector-header">
        <div
          className={`date-picker-calendar-header-arrow ${
            isPrevArrowDisabled
              ? "date-picker-calendar-header-arrow-disabled"
              : ""
          }`}
          onClick={() =>
            activeSelector === "year" &&
            !isPrevArrowDisabled &&
            handleStartYearChange(-1)
          }
        >
          <ArrowLeftIcon />
        </div>

        <div className="date-picker-calendar-header-dropdown-text">
          {activeSelector === "year"
            ? `${actualStartYear} - ${actualEndYear}`
            : selectedYear}
        </div>

        <div
          className={`date-picker-calendar-header-arrow ${
            isNextArrowDisabled
              ? "date-picker-calendar-header-arrow-disabled"
              : ""
          }`}
          onClick={() =>
            activeSelector === "year" &&
            !isNextArrowDisabled &&
            handleStartYearChange(1)
          }
        >
          <ArrowRightIcon />
        </div>
      </div>

      <YearSelector
        isActive={activeSelector === "year"}
        selectedYear={selectedYear}
        startYear={startYear}
        setSelectedYear={setSelectedYear}
        setActiveSelector={setActiveSelector}
        handleStartYearChange={handleStartYearChange}
        minYear={minYear}
        maxYear={maxYear}
      />

      <MonthSelector
        isActive={activeSelector === "month"}
        handleMonthChange={handleMonthChange}
        minMonth={minMonth}
        maxMonth={maxMonth}
      />
    </div>
  );
};

export default Selector;
