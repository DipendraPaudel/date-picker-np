import { useState } from "react";

import YearMonthDropdown from "./Dropdown";
import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import { getFormattedDate } from "../../../utils/calendar";
import { CalendarHeaderProps } from "../../../types/Calendar";
import { MONTHS_IN_WORDS } from "../../../constants/calendar";
import {
  extractDateData,
  getNextMonth,
  getPreviousMonth,
} from "../../../utils/dates";

const CalendarHeader = ({ date, handleChange }: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDateChange = (value: number, type: string) => {
    const { year, month } = extractDateData(date);

    handleChange(
      `${type === "year" ? value : year}-${type === "month" ? value : month}-dd`
    );
  };

  // function which are triggered on left and right arrow click
  const handleNext = () => handleChange(getNextMonth(date));
  const handlePrev = () => handleChange(getPreviousMonth(date));

  const [year, month] = getFormattedDate(date);

  return (
    <div className="date-picker-calendar-header">
      <ArrowLeftIcon onClick={handlePrev} />

      <div className="date-picker-calendar-header-dropdown-container">
        <p
          className="date-picker-calendar-header-dropdown-text"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {MONTHS_IN_WORDS[month - 1]?.name_en} {year}
        </p>

        {isDropdownOpen && (
          <YearMonthDropdown
            month={month}
            year={year}
            handleChange={handleDateChange}
          />
        )}
      </div>

      <ArrowRightIcon onClick={handleNext} />
    </div>
  );
};

export default CalendarHeader;
