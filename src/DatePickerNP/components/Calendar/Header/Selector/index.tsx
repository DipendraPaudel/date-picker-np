import { useEffect, useState } from "react";

import { SelectorProps } from "../../../../types/Calendar";
import YearSelector from "./YearSelector";
import MonthSelector from "./MonthSelector";
import {
  FINAL_YEAR_OF_CALENDAR,
  INITIAL_YEAR_OF_CALENDAR,
} from "../../../../constants/calendar";
import { extractDateData, isValidNepaliDate } from "../../../../utils";
import { numberConversion } from "../../../../utils/number";

const Selector = ({
  year,
  handleChange,
  setIsDropdownOpen,
  min,
  max,
  lang,
}: SelectorProps) => {
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

  const headerText = activeSelector === "year" ? "Select Year" : "Select Month";

  return (
    <div className="date-picker-selector-container">
      <div className="date-picker-selector-header">
        <div className="date-picker-calendar-header-dropdown-text">
          {numberConversion(lang, headerText)}
        </div>
      </div>

      {activeSelector === "year" && (
        <YearSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          setActiveSelector={setActiveSelector}
          minYear={minYear}
          maxYear={maxYear}
          lang={lang}
        />
      )}

      {activeSelector === "month" && (
        <MonthSelector
          handleMonthChange={handleMonthChange}
          minMonth={minMonth}
          maxMonth={maxMonth}
          lang={lang}
        />
      )}
    </div>
  );
};

export default Selector;
