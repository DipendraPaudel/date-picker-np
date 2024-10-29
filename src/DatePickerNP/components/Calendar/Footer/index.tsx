import { CalendarFooterProps } from "../../../types/DatePickerCalendar";
import { getTodayBSDate } from "../../../utils/dates";

const CalendarFooter = ({ hasValidValue, onChange }: CalendarFooterProps) => {
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
        className="date-picker-calendar-footer-btn"
        onClick={() => onChange(getTodayBSDate())}
      >
        Today
      </div>
    </div>
  );
};

export default CalendarFooter;
