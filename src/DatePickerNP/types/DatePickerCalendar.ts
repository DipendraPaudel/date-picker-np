import React from "react";

import { DatePickerCommonProps, PositionType } from "./DatePickerNP";
import { CalendarStyles } from "./Calendar";

export type DatePickerCalendarProps = DatePickerCommonProps & {
  value?: string;
  onChange: (date?: string) => void;

  calendarPositions?: React.CSSProperties;
  calendarStyles: CalendarStyles;
  position?: PositionType;
};

export type CalendarFooterProps = DatePickerCommonProps & {
  hasValidValue: boolean;
  onChange: (date?: string) => void;

  calendarStyles: CalendarStyles;
};
