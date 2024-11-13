import React from "react";

export type DatePickerInputProps = {
  value?: string;
  inputStyles?: React.CSSProperties;
  toggleCalendar: () => void;
  disabled?: boolean;
};
