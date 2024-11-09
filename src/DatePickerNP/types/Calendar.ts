export type ArrowIconProps = {
  onClick?: () => void;
};

export type DropdownProps = {
  value: number;
  handleChange: (value: number) => void;

  min?: string;
  max?: string;
};

export type CalendarHeaderProps = {
  date: string;
  handleChange: (value: string) => void;

  min?: string;
  max?: string;
};

export type YearMonthDropdownProps = {
  handleChange: (value: number, type: string) => void;
  month: number;
  year: number;

  min?: string;
  max?: string;
};

export type CalendarDatesProps = {
  date: string;
  handleChange: (day: number) => void;

  min?: string;
  max?: string;
};
