import { CalendarFooterProps } from "../../../types/DatePickerCalendar";
import {
  getTodayBSDate,
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "../../../utils/dates";

const CalendarFooter = ({
  hasValidValue,
  onChange,
  min,
  max,
}: CalendarFooterProps) => {
  let isTodayDateDisabled = true;
  const todayDate = getTodayBSDate();

  // check if today button should be disabled
  if (min && isValidNepaliDate(min)) {
    isTodayDateDisabled = !isGreaterThanOrEqualToMinDate(todayDate, min);
  }

  // only check the max date if current date is not disabled by min date only
  if (!isTodayDateDisabled && max && isValidNepaliDate(max)) {
    isTodayDateDisabled = !isLessThanOrEqualToMaxDate(todayDate, max);
  }

  return (
    <div className="date-picker-calendar-footer">
      <div
        className={`date-picker-calendar-footer-btn ${
          hasValidValue ? "" : "date-picker-calendar-footer-btn-disabled"
        }`}
        onClick={() => hasValidValue && onChange("")}
      >
        Clear
      </div>
      <div
        className={`date-picker-calendar-footer-btn ${
          isTodayDateDisabled ? "date-picker-calendar-footer-btn-disabled" : ""
        }`}
        onClick={() => !isTodayDateDisabled && onChange(getTodayBSDate())}
      >
        Today
      </div>
    </div>
  );
};

export default CalendarFooter;
