import { useState } from "react";

import { CalendarHeaderProps } from "../../../types/Calendar";
import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import YearMonthDropdown from "./Dropdown";
import { getFormattedDate } from "../../../utils/calendar";

const selectedDate = "Oct 2020";

const CalendarHeader = ({ date, handleChange }: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNext = () => {};
  const handlePrev = () => {};

  const [year, month] = getFormattedDate();

  return (
    <div className="date-picker-calendar-header">
      <ArrowLeftIcon onClick={handlePrev} />

      <div className="date-picker-calendar-header-dropdown-container">
        <p
          className="date-picker-calendar-header-dropdown-text"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedDate}
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
