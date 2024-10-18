import { useState } from "react";

import YearMonthDropdown from "./Dropdown";
import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import { getFormattedDate } from "../../../utils/calendar";
import { CalendarHeaderProps } from "../../../types/Calendar";
import { MONTHS_IN_WORDS } from "../../../constants/calendar";

const CalendarHeader = ({ date, handleChange }: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNext = () => {};
  const handlePrev = () => {};

  const [year, month] = getFormattedDate(date);

  return (
    <div className="date-picker-calendar-header">
      <ArrowLeftIcon onClick={handlePrev} />

      <div className="date-picker-calendar-header-dropdown-container">
        <p
          className="date-picker-calendar-header-dropdown-text"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {MONTHS_IN_WORDS[month].shortName} {year}
        </p>

        {isDropdownOpen && (
          <YearMonthDropdown
            month={month}
            year={year}
            handleChange={handleChange}
          />
        )}
      </div>

      <ArrowRightIcon onClick={handleNext} />
    </div>
  );
};

export default CalendarHeader;
