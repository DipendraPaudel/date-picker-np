export type ArrowIconProps = {
  onClick?: () => void;
};

export type DropdownProps = {
  value: number;
  handleChange: (value: number) => void;
};

export type CalendarHeaderProps = {
  date: string;
  handleChange: (value: number, type: string) => void;
};

export type YearMonthDropdownProps = Pick<
  CalendarHeaderProps,
  "handleChange"
> & {
  month: number;
  year: number;
};

export type CalendarDatesProps = {
  date: string;
};
