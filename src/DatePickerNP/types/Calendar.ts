import React from "react";
import { DatePickerCommonProps } from "./DatePickerNP";

export type ArrowIconProps = {
  onClick?: () => void;
};

export type SelectorProps = DatePickerCommonProps & {
  year: number;
  handleChange: (value: string) => void;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CalendarHeaderProps = DatePickerCommonProps & {
  date: string;
  handleChange: (value: string) => void;

  calendarStyles: CalendarStyles;
};

export type CalendarDatesProps = DatePickerCommonProps & {
  date: string;
  handleChange: (day: number) => void;

  calendarStyles: CalendarStyles;
};

export type YearSelectorProps = Pick<DatePickerCommonProps, "lang"> & {
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  setActiveSelector: React.Dispatch<React.SetStateAction<"year" | "month">>;

  minYear: number;
  maxYear: number;
};

export type MonthSelectorProps = Pick<DatePickerCommonProps, "lang"> & {
  handleMonthChange: (month: number) => void;

  minMonth: number;
  maxMonth: number;
};

export type WeeksProps = Pick<DatePickerCommonProps, "lang">;

export type CalendarStyles = {
  dates?: {
    hoverBackgroundColor?: string;
    activeBackgroundColor?: string;
    activeTextColor?: string;
  };
  footer?: {
    textColor?: string;
  };
};
