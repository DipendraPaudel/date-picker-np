import { MONTHS_IN_WORDS } from "../../../../constants/calendar";
import { MonthSelectorProps } from "../../../../types/Calendar";

const MonthSelector = ({
  handleMonthChange,
  minMonth,
  maxMonth,
}: MonthSelectorProps) => {
  return (
    <div className="date-picker-selector-block-container">
      {MONTHS_IN_WORDS.map(({ name_en, month_position }) => {
        const isDisabled =
          month_position < minMonth || month_position > maxMonth;

        return (
          <div
            key={name_en}
            onClick={() => !isDisabled && handleMonthChange(month_position)}
            className={
              isDisabled ? "date-picker-selector-block-disabled" : undefined
            }
          >
            <div>{name_en}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthSelector;
