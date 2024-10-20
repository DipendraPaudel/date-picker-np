import { DAYS_OF_WEEK } from "../../../constants/calendar";
import { CalendarDatesProps } from "../../../types/Calendar";
import {
  extractDateData,
  getNumberOfDaysInMonth,
  getNumberOfDaysInPreviousMonth,
} from "../../../utils/dates";

const Weeks = () => {
  return (
    <div className="date-picker-body-container date-picker-week-days-container">
      {DAYS_OF_WEEK.map(({ shortName }) => (
        <div key={shortName}>{shortName}</div>
      ))}
    </div>
  );
};

const CalendarDates = ({ date, handleChange }: CalendarDatesProps) => {
  const numberOfDays = getNumberOfDaysInMonth(date);
  const numberOfDaysInPreviousMonth = getNumberOfDaysInPreviousMonth(date);

  const { day: todayDate } = extractDateData(date);

  const startingWeekDay = 4;

  const prevStartPosition = numberOfDaysInPreviousMonth - startingWeekDay + 2;
  const totalNextMonthDays = (numberOfDays + startingWeekDay - 1) % 7;

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
              className={date === +todayDate ? "date-picker-today-date" : ""}
              onClick={() => handleChange(date)}
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
