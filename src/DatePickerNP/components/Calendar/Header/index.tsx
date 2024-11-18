import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "../../Icons";
import { CalendarHeaderProps } from "../../../types/Calendar";
import {
  FINAL_YEAR_OF_CALENDAR,
  INITIAL_YEAR_OF_CALENDAR,
  MONTHS_IN_WORDS,
} from "../../../constants/calendar";
import {
  getFormattedDate,
  getNextMonth,
  getPreviousMonth,
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "../../../utils";
import Selector from "./Selector";

const CalendarHeader = ({
  date,
  handleChange,
  min,
  max,
}: CalendarHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // function which are triggered on left and right arrow click
  const handleNext = () => handleChange(getNextMonth(date));
  const handlePrev = () => handleChange(getPreviousMonth(date));

  const [year, month] = getFormattedDate(date);

  // disable the prev and next arrow button based on the initial and final dates possible on the calendar
  let isPrevArrowDisabled = year === INITIAL_YEAR_OF_CALENDAR && month === 1;
  let isNextArrowDisabled = year === FINAL_YEAR_OF_CALENDAR && month === 12;

  // also check if prev month has valid days
  if (min && isValidNepaliDate(min) && !isPrevArrowDisabled) {
    const isGreaterThanMinDate = isGreaterThanOrEqualToMinDate(
      getPreviousMonth(date),
      min
    );

    isPrevArrowDisabled = !isGreaterThanMinDate;
  }

  // also check if next month has valid days
  if (max && isValidNepaliDate(max) && !isNextArrowDisabled) {
    const isGreaterThanMinDate = isLessThanOrEqualToMaxDate(
      getNextMonth(date),
      max
    );

    isNextArrowDisabled = !isGreaterThanMinDate;
  }

  const headerDisplayText = `${MONTHS_IN_WORDS[month - 1]?.name_en} ${year}`;

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
            min={min}
            max={max}
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
