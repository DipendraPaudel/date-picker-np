import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons/Arrow";
import { getFormattedDate } from "../../../utils/calendar";
import { CalendarHeaderProps } from "../../../types/Calendar";
import {
  FINAL_YEAR_OF_CALENDAR,
  INITIAL_YEAR_OF_CALENDAR,
  MONTHS_IN_WORDS,
} from "../../../constants/calendar";
import { getNextMonth, getPreviousMonth } from "../../../utils/dates";
import Selector from "./Selector";

const CalendarHeader = ({ date, handleChange }: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // function which are triggered on left and right arrow click
  const handleNext = () => handleChange(getNextMonth(date));
  const handlePrev = () => handleChange(getPreviousMonth(date));

  const [year, month] = getFormattedDate(date);

  const headerDisplayText = `${MONTHS_IN_WORDS[month - 1]?.name_en} ${year}`;

  // disable the prev and next arrow button based on the dates
  const isPrevArrowDisabled = year === INITIAL_YEAR_OF_CALENDAR && month === 1;
  const isNextArrowDisabled = year === FINAL_YEAR_OF_CALENDAR && month === 12;

  return (
    <div className="date-picker-calendar-header">
      <div
        className={`date-picker-calendar-header-arrow ${
          isPrevArrowDisabled
            ? "date-picker-calendar-header-arrow-disabled"
            : ""
        }`}
        onClick={() => !isPrevArrowDisabled && handlePrev()}
      >
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
            setIsDropdownOpen={setIsDropdownOpen}
          />
        )}
      </div>

      <div
        className={`date-picker-calendar-header-arrow ${
          isNextArrowDisabled
            ? "date-picker-calendar-header-arrow-disabled"
            : ""
        }`}
        onClick={() => !isNextArrowDisabled && handleNext()}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default CalendarHeader;
