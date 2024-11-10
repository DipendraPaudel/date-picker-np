import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import { getFormattedDate } from "../../../utils/calendar";
import { CalendarHeaderProps } from "../../../types/Calendar";
import { MONTHS_IN_WORDS } from "../../../constants/calendar";
import { getNextMonth, getPreviousMonth } from "../../../utils/dates";
import Selector from "./Selector";

const CalendarHeader = ({ date, handleChange }: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // function which are triggered on left and right arrow click
  const handleNext = () => handleChange(getNextMonth(date));
  const handlePrev = () => handleChange(getPreviousMonth(date));

  const [year, month] = getFormattedDate(date);

  const headerDisplayText = `${MONTHS_IN_WORDS[month - 1]?.name_en} ${year}`;

  return (
    <div className="date-picker-calendar-header">
      <div className="date-picker-calendar-header-arrow" onClick={handlePrev}>
        <ArrowLeftIcon />
      </div>

      <div className="date-picker-calendar-header-dropdown-container">
        <p
          className="date-picker-calendar-header-dropdown-text"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {headerDisplayText}
        </p>

        {isDropdownOpen && (
          <Selector
            year={year}
            handleChange={handleChange}
            headerDisplayText={headerDisplayText}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        )}
      </div>

      <div className="date-picker-calendar-header-arrow" onClick={handleNext}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default CalendarHeader;
