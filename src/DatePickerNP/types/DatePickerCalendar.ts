import React from "react";

export type DatePickerCalendarProps = {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  calendarStyles?: React.CSSProperties;
};
