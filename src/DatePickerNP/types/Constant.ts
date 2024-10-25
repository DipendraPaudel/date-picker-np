export type NepaliMonthsCountType = {
  year: number;
  months: number[];
};

export type UpdatedNepaliMonthsCountType = NepaliMonthsCountType & {
  startWeek: number[];
};
