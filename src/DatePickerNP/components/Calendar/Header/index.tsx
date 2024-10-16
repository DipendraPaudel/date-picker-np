import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import YearMonthDropdown from "./Dropdown";

const selectedDate = "Oct 2020";

const CalendarHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNext = () => {};
  const handlePrev = () => {};

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

        {isDropdownOpen && <YearMonthDropdown />}
      </div>

      <ArrowRightIcon onClick={handleNext} />
    </div>
  );
};

export default CalendarHeader;
