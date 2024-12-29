import { CalendarStyles } from "./Calendar";
import { DatePickerCommonInputProps } from "./DatePickerInput";

export type DatePickerCommonProps = {
  lang?: "en" | "np";

  max?: string;
  min?: string;
};

export type DatePickerNPProps = DatePickerCommonInputProps &
  DatePickerCommonProps & {
    menuPosition?: MenuPositionType;
    calendarStyles?: CalendarStyles;
  };

export type MenuPositionType = "auto" | "top" | "bottom";
