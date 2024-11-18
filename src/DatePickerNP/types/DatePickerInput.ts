import React from "react";

export type InputStyles = Pick<
  React.CSSProperties,
  "padding" | "background" | "width" | "border" | "lineHeight"
> & {
  height?: number; // make sure height is number for the calculation of the calendar menu position
};

export type DatePickerInputProps = {
  onChange: (date?: string) => void;
  inputContainerStyles?: InputStyles;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  placeholder?: string;
  inputElement?: React.ReactNode;
};
