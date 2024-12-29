import { CalendarFooterProps } from "../../../types/DatePickerCalendar";
import {
  getTodayBSDate,
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "../../../utils";

const CalendarFooter = ({
  hasValidValue,
  onChange,
  min,
  max,
  lang,
  calendarStyles,
}: CalendarFooterProps) => {
  let isTodayDateDisabled = false;
  const todayDate = getTodayBSDate();

  // check if today button should be disabled
  if (min && isValidNepaliDate(min)) {
    isTodayDateDisabled = !isGreaterThanOrEqualToMinDate(todayDate, min);
  }

  // only check the max date if current date is not disabled by min date only
  if (!isTodayDateDisabled && max && isValidNepaliDate(max)) {
    isTodayDateDisabled = !isLessThanOrEqualToMaxDate(todayDate, max);
  }

  const footerTextColor = calendarStyles?.footer?.textColor;

  return (
    <div className="date-picker-calendar-footer">
      <div
        className={`date-picker-calendar-footer-btn ${
          hasValidValue ? "" : "date-picker-calendar-footer-btn-disabled"
        }`}
        style={{
          color: footerTextColor,
        }}
        onClick={() => hasValidValue && onChange("")}
      >
        {lang === "en" ? "Clear" : "हटाउनुहोस्"}
      </div>
      <div
        className={`date-picker-calendar-footer-btn ${
          isTodayDateDisabled ? "date-picker-calendar-footer-btn-disabled" : ""
        }`}
        style={{
          color: footerTextColor,
        }}
        onClick={() => !isTodayDateDisabled && onChange(getTodayBSDate())}
      >
        {lang === "en" ? "Today" : "आज"}
      </div>
    </div>
  );
};

export default CalendarFooter;
