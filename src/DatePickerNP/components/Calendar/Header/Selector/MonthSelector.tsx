import { MONTHS_IN_WORDS } from "../../../../constants/calendar";
import { MonthSelectorProps } from "../../../../types/Calendar";

const MonthSelector = ({ handleMonthChange }: MonthSelectorProps) => {
  return (
    <div className="date-picker-selector-block-container">
      {MONTHS_IN_WORDS.map(({ name_en, month_position }) => {
        return (
          <div key={name_en} onClick={() => handleMonthChange(month_position)}>
            <div>{name_en}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthSelector;
