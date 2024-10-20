export type ArrowIconProps = {
  onClick?: () => void;
};

export type DropdownProps = {
  value: number;
  handleChange: (value: number) => void;
};

export type CalendarHeaderProps = {
  date: string;
  handleChange: (value: string) => void;
};

export type YearMonthDropdownProps = {
  handleChange: (value: number, type: string) => void;
  month: number;
  year: number;
};

export type CalendarDatesProps = {
  date: string;
  handleChange: (day: number) => void;
};
