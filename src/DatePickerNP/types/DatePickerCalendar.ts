import React from "react";

export type DatePickerCalendarProps = {
  value?: string;
  onChange: (date?: string) => void;
  calendarStyles?: React.CSSProperties;
};
