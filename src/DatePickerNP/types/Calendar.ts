import React from "react";

export type ArrowIconProps = {
  onClick?: () => void;
};

export type SelectorProps = {
  year: number;
  handleChange: (value: string) => void;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;

  min?: string;
  max?: string;
};

export type CalendarHeaderProps = {
  date: string;
  handleChange: (value: string) => void;

  min?: string;
  max?: string;
};

export type CalendarDatesProps = {
  date: string;
  handleChange: (day: number) => void;

  min?: string;
  max?: string;
};

export type YearSelectorProps = {
  isActive: boolean;
  startYear: number;
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  setActiveSelector: React.Dispatch<React.SetStateAction<"year" | "month">>;
  handleStartYearChange: (deltaY: number) => void;

  minYear: number;
  maxYear: number;
};

export type MonthSelectorProps = {
  isActive: boolean;
  handleMonthChange: (month: number) => void;

  minMonth: number;
  maxMonth: number;
};
