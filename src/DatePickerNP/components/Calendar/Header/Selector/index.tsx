import { useEffect, useState } from "react";

import { SelectorProps } from "../../../../types/Calendar";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../Icons/Arrow";
import YearSelector from "./YearSelector";
import MonthSelector from "./MonthSelector";
import {
  FINAL_YEAR_OF_CALENDAR,
  INITIAL_YEAR_OF_CALENDAR,
} from "../../../../constants/calendar";

const Selector = ({ year, handleChange, setIsDropdownOpen }: SelectorProps) => {
  const [startYear, setStartYear] = useState(
    Math.floor((year - INITIAL_YEAR_OF_CALENDAR) / 12) * 12
  );

  // to detect whether to display year selector or month selector
  const [activeSelector, setActiveSelector] = useState<"year" | "month">(
    "year"
  );

  // store selected year in the store so that handleChange can be called when selecting the month
  const [selectedYear, setSelectedYear] = useState(year);

  // function to handle years selector options to be displayed on negative and positive units
  const handleStartYearChange = (deltaY: number) => {
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
    handleChange(`${selectedYear}-${month}-dd`);
    setIsDropdownOpen(false);
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
          className="date-picker-calendar-header-arrow"
          onClick={() => handleStartYearChange(-1)}
        >
          <ArrowLeftIcon />
        </div>

        <div
          className="date-picker-calendar-header-dropdown-text"
          onClick={() => setIsDropdownOpen(false)}
        >
          {`${startYear + INITIAL_YEAR_OF_CALENDAR} - ${
            startYear + 11 + INITIAL_YEAR_OF_CALENDAR
          }`}
        </div>

        <div
          className="date-picker-calendar-header-arrow"
          onClick={() => handleStartYearChange(1)}
        >
          <ArrowRightIcon />
        </div>
      </div>

      {activeSelector === "year" && (
        <YearSelector
          selectedYear={selectedYear}
          startYear={startYear}
          setSelectedYear={setSelectedYear}
          setActiveSelector={setActiveSelector}
          handleStartYearChange={handleStartYearChange}
        />
      )}

      {activeSelector === "month" && (
        <MonthSelector handleMonthChange={handleMonthChange} />
      )}
    </div>
  );
};

export default Selector;
