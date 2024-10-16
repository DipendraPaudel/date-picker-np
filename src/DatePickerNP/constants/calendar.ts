export const YEARS_IN_WORDS = Array.from(
  { length: new Date().getFullYear() - 1999 },
  (_, i) => (2000 + i).toString()
);

export const MONTHS_IN_WORDS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
