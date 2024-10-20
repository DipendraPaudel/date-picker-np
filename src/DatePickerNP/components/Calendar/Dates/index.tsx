import { DAYS_OF_WEEK } from "../../../constants/calendar";

const Weeks = () => {
  return (
    <div className="date-picker-body-container date-picker-week-days-container">
      {DAYS_OF_WEEK.map(({ shortName }) => (
        <div key={shortName}>{shortName}</div>
      ))}
    </div>
  );
};

const CalendarDates = () => {
  const numberOfDays = 29;
  const startingWeekDay = 4;

  const prevMonthNumberOfDays = 31;

  const prevStartPosition = prevMonthNumberOfDays - startingWeekDay + 2;
  const totalNextMonthDays = (numberOfDays + startingWeekDay - 1) % 7;

  const todayDate = 11;

  return (
    <>
      <Weeks />

      <div className="date-picker-body-container date-picker-dates-container">
        {/* Previous Months days which are in the same first week of current month */}
        {Array.from({ length: startingWeekDay - 1 }).map((_, index) => (
          <div key={index} className="prev-month-days">
            {prevStartPosition + index}
          </div>
        ))}

        {Array.from({ length: numberOfDays }).map((_, index) => {
          const date = index + 1;
          return (
            <div
              key={index}
              className={date === todayDate ? "date-picker-today-date" : ""}
            >
              {date}
            </div>
          );
        })}

        {/* Upcoming Months days which are in the same last week of current month */}
        {Array.from({
          length: totalNextMonthDays > 0 ? 7 - totalNextMonthDays : 0,
        }).map((_, index) => (
          <div key={index} className="next-month-days">
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarDates;
