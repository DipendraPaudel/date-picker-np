import { YEARS_IN_WORDS } from "../../../constants/calendar";
import { DropdownProps, YearMonthDropdownProps } from "../../../types/Calendar";
import { ArrowBottomIcon, ArrowTopIcon } from "../../Icons/Arrow";
import { getActiveThreeMonths } from "../../../utils/calendar";

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

const MonthDropdown = ({ value, handleChange }: DropdownProps) => {
  const activeMonths = getActiveThreeMonths(value);

  return (
    <div className="date-picker-calendar-month-dropdown date-picker-dropdown">
      <div
        className="date-picker-dropdown-arrow date-picker-dropdown-top-arrow"
        onClick={() => handleChange(value === 0 ? 11 : value - 1)}
      >
        <ArrowTopIcon />
      </div>

      {activeMonths.map(({ name, index }) => {
        return (
          <div
            key={name}
            className={`dropdown-option ${
              index === value ? "dropdown-active" : ""
            }`}
            onClick={() => handleChange(index)}
          >
            {name}
          </div>
        );
      })}

      <div
        className="date-picker-dropdown-arrow date-picker-dropdown-bottom-arrow"
        onClick={() => handleChange(value === 11 ? 0 : value + 1)}
      >
        <ArrowBottomIcon />
      </div>
    </div>
  );
};

const YearMonthDropdown = ({ month, handleChange }: YearMonthDropdownProps) => {
  return (
    <div className="date-picker-calendar-header-dropdown">
      <MonthDropdown
        value={month}
        handleChange={(value: number) => handleChange(value, "month")}
      />
      <YearDropdown />
    </div>
  );
};

export default YearMonthDropdown;
