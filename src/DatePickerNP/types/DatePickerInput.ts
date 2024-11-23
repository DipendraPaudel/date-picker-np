import React from "react";

export type InputStyles = Pick<
  React.CSSProperties,
  "padding" | "background" | "width" | "border" | "lineHeight" | "color"
> & {
  height?: number; // make sure height is number for the calculation of the calendar menu position
};

export type DatePickerInputProps = DatePickerCommonInputProps & {
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DatePickerCommonInputProps = {
  value?: string;
  onChange: (date: string) => void;
  disabled?: boolean;
  inputElement?: React.ReactNode;
  placeholder?: string;
  hasCalendarIcon?: boolean;
  calendarIcon?: React.ReactNode;
  calendarColor?: string;
  inputContainerStyles?: InputStyles;
};
