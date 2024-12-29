import { DAYS_OF_WEEK } from "../../../constants/calendar";
import { NEPALI_DATES } from "../../../constants/dates";
import { CalendarDatesProps, WeeksProps } from "../../../types/Calendar";
import {
  extractDateData,
  getNumberOfDaysInMonth,
  getNumberOfDaysInPreviousMonth,
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "../../../utils";
import { numberConversion } from "../../../utils/number";

const Weeks = ({ lang }: WeeksProps) => {
  return (
    <div className="date-picker-body-container date-picker-week-days-container">
      {DAYS_OF_WEEK.map(({ name_en, name_np }) => (
        <div key={name_en}>{lang === "en" ? name_en : name_np}</div>
      ))}
    </div>
  );
};

const CalendarDates = ({
  date,
  handleChange,
  min,
  max,
  lang,
  calendarStyles,
}: CalendarDatesProps) => {
  const numberOfDays = getNumberOfDaysInMonth(date);
  const numberOfDaysInPreviousMonth = getNumberOfDaysInPreviousMonth(date);

  const { year, month, day: selectedDate } = extractDateData(date);

  const startingWeekDay = NEPALI_DATES.find((data) => data.year === +year)
    ?.startWeek[+month - 1] as number;

  const prevStartPosition = numberOfDaysInPreviousMonth - startingWeekDay + 2;

  const totalNextMonthDays = (numberOfDays + startingWeekDay - 1) % 7;
  let currentNextMonthDaysCount =
    totalNextMonthDays > 0 ? 7 - totalNextMonthDays : 0;

  const totalCurrentRows =
    (startingWeekDay -
      1 +
      numberOfDays +
      (totalNextMonthDays > 0 ? 7 - totalNextMonthDays : 0)) /
    7;

  // Add one additional row i.e. 7 days, if there are only 5 rows
  // to make the calendar height consistent
  if (totalCurrentRows === 5)
    currentNextMonthDaysCount = currentNextMonthDaysCount + 7;

  return (
    <>
      <Weeks lang={lang} />

      <div className="date-picker-body-container date-picker-dates-container">
        {/* Previous Months days which are in the same first week of current month */}
        {Array.from({ length: startingWeekDay - 1 }).map((_, index) => (
          <div key={index} className="prev-month-days">
            {numberConversion(
              lang,
              numberOfDaysInPreviousMonth > 0
                ? prevStartPosition + index
                : undefined
            )}
          </div>
        ))}

        {Array.from({ length: numberOfDays }).map((_, index) => {
          const day = index + 1;

          let isDateDisabled = false;

          // check if min and max dates are passed
          // this function is causing lagging issue due to many renders and new check for every months
          if (min && isValidNepaliDate(min)) {
            isDateDisabled = !isGreaterThanOrEqualToMinDate(
              date.slice(0, 8) + day,
              min
            );
          }

          // only check the max date if current date is not disabled by min date only
          if (!isDateDisabled && max && isValidNepaliDate(max)) {
            isDateDisabled = !isLessThanOrEqualToMaxDate(
              date.slice(0, 8) + day,
              max
            );
          }

          const isSelected = day === +selectedDate;

          return (
            <div
              key={index}
              className={`${isSelected ? "date-picker-selected-date" : ""} ${
                isDateDisabled ? "date-picker-date-disabled" : ""
              }`}
              onClick={() => !isDateDisabled && handleChange(day)}
              style={{
                ...(isSelected
                  ? {
                      color: calendarStyles?.dates?.activeTextColor,
                      backgroundColor:
                        calendarStyles?.dates?.activeBackgroundColor,
                    }
                  : {
                      ["--date-picker-np-hover-color" as string]:
                        calendarStyles?.dates?.hoverBackgroundColor,
                    }),
              }}
            >
              {numberConversion(lang, day)}
            </div>
          );
        })}

        {/* Upcoming Months days which are in the same last week of current month */}
        {Array.from({
          length: currentNextMonthDaysCount,
        }).map((_, index) => (
          <div key={index} className="next-month-days">
            {numberConversion(lang, index + 1)}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarDates;
