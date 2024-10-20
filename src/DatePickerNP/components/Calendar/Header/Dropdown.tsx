import { DropdownProps, YearMonthDropdownProps } from "../../../types/Calendar";
import { ArrowBottomIcon, ArrowTopIcon } from "../../Icons/Arrow";
import {
  getActiveThreeMonths,
  getActiveThreeYears,
} from "../../../utils/calendar";
import { YEARS_LIST } from "../../../constants/calendar";

const YearDropdown = ({ value, handleChange }: DropdownProps) => {
  const activeYears = getActiveThreeYears(value);

  const handleYearChange = (count: number) => {
    const current = value + count;
    if (
      current < YEARS_LIST[0].year ||
      current > YEARS_LIST[YEARS_LIST.length - 1].year
    )
      return false;

    handleChange(current);
  };

  return (
    <div className="date-picker-calendar-month-dropdown date-picker-dropdown">
      <div
        className={`date-picker-dropdown-arrow date-picker-dropdown-top-arrow ${
          value === YEARS_LIST[0].year
            ? "date-picker-dropdown-arrow-disabled"
            : ""
        }`}
        onClick={() => handleYearChange(-1)}
      >
        <ArrowTopIcon />
      </div>

      {activeYears.map(({ year }) => {
        return (
          <div
            key={year}
            className={`dropdown-option ${
              year === value ? "dropdown-active" : ""
            }`}
            onClick={() => handleChange(year)}
          >
            {year}
          </div>
        );
      })}

      <div
        className={`date-picker-dropdown-arrow date-picker-dropdown-bottom-arrow ${
          value === YEARS_LIST[YEARS_LIST.length - 1].year
            ? "date-picker-dropdown-arrow-disabled"
            : ""
        }`}
        onClick={() => handleYearChange(1)}
      >
        <ArrowBottomIcon />
      </div>
    </div>
  );
};

const MonthDropdown = ({ value, handleChange }: DropdownProps) => {
  const activeMonths = getActiveThreeMonths(value);

  return (
    <div className="date-picker-calendar-month-dropdown date-picker-dropdown">
      <div
        className="date-picker-dropdown-arrow date-picker-dropdown-top-arrow"
        onClick={() => handleChange(value === 1 ? 12 : value - 1)}
      >
        <ArrowTopIcon />
      </div>

      {activeMonths.map(({ name_en, month_position }) => {
        return (
          <div
            key={name_en}
            className={`dropdown-option ${
              month_position === value ? "dropdown-active" : ""
            }`}
            onClick={() => handleChange(month_position)}
          >
            {name_en}
          </div>
        );
      })}

      <div
        className="date-picker-dropdown-arrow date-picker-dropdown-bottom-arrow"
        onClick={() => handleChange(value === 12 ? 1 : value + 1)}
      >
        <ArrowBottomIcon />
      </div>
    </div>
  );
};

const YearMonthDropdown = ({
  month,
  year,
  handleChange,
}: YearMonthDropdownProps) => {
  return (
    <div className="date-picker-calendar-header-dropdown">
      <MonthDropdown
        value={month}
        handleChange={(value: number) => handleChange(value, "month")}
      />
      <YearDropdown
        value={year}
        handleChange={(value: number) => handleChange(value, "year")}
      />
    </div>
  );
};

export default YearMonthDropdown;
