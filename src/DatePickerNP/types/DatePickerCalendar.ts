import React from "react";
import { DatePickerCommonProps } from "./DatePickerNP";

export type DatePickerCalendarProps = DatePickerCommonProps & {
  value?: string;
  onChange: (date?: string) => void;

  calendarStyles?: React.CSSProperties;
};

export type CalendarFooterProps = DatePickerCommonProps & {
  hasValidValue: boolean;
  onChange: (date?: string) => void;
};
