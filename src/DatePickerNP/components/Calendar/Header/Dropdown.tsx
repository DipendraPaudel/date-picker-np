import { MONTHS_IN_WORDS, YEARS_IN_WORDS } from "../../../constants/calendar";

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

const MonthDropdown = () => {
  return (
    <div className="date-picker-calendar-month-dropdown date-picker-dropdown">
      {MONTHS_IN_WORDS.map((month) => (
        <div key={month} className="dropdown-option">
          {month}
        </div>
      ))}
    </div>
  );
};

const YearMonthDropdown = () => {
  return (
    <div className="date-picker-calendar-header-dropdown">
      <MonthDropdown />
      <YearDropdown />
    </div>
  );
};

export default YearMonthDropdown;
