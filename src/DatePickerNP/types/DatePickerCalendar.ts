import React from "react";

export type DatePickerCalendarProps = {
  value?: string;
  onChange: (date?: string) => void;

  min?: string;
  max?: string;

  calendarStyles?: React.CSSProperties;
};

export type CalendarFooterProps = {
  hasValidValue: boolean;
  onChange: (date?: string) => void;

  min?: string;
  max?: string;
};
