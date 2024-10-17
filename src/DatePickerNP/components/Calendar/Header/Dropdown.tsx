import { useState } from "react";
import { MONTHS_IN_WORDS, YEARS_IN_WORDS } from "../../../constants/calendar";
import { DropdownProps } from "../../../types/Calendar";

const YearDropdown = () => {
  return (
    <div className="date-picker-calendar-year-dropdown date-picker-dropdown">
      {YEARS_IN_WORDS.map((year) => (
        <div key={year} className="dropdown-option">
          {year}
        </div>
      ))}
    </div>
  );
};

const MonthDropdown = ({ selected, setSelected }: DropdownProps) => {
  const startMonthIndex = Math.max(Math.min(selected - 2, 7), 0);

  return (
    <div className="date-picker-calendar-month-dropdown date-picker-dropdown">
      {MONTHS_IN_WORDS.slice(startMonthIndex, startMonthIndex + 5).map(
        (month, index) => {
          const monthIndex = index + startMonthIndex;

          return (
            <div
              key={month}
              className={`dropdown-option ${
                monthIndex === selected ? "dropdown-active" : ""
              }`}
              onClick={() => setSelected(monthIndex)}
            >
              {month}
            </div>
          );
        }
      )}
    </div>
  );
};

const YearMonthDropdown = () => {
  const [selectedMonth, setSelectedMonth] = useState(5);

  return (
    <div className="date-picker-calendar-header-dropdown">
      <MonthDropdown selected={selectedMonth} setSelected={setSelectedMonth} />
      <YearDropdown />
    </div>
  );
};

export default YearMonthDropdown;
