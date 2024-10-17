export const YEARS_IN_WORDS = Array.from(
  { length: new Date().getFullYear() - 1999 },
  (_, i) => 2000 + i
);

export const MONTHS_IN_WORDS = [
  { name: "January", index: 0 },
  { name: "February", index: 1 },
  { name: "March", index: 2 },
  { name: "April", index: 3 },
  { name: "May", index: 4 },
  { name: "June", index: 5 },
  { name: "July", index: 6 },
  { name: "August", index: 7 },
  { name: "September", index: 8 },
  { name: "October", index: 9 },
  { name: "November", index: 10 },
  { name: "December", index: 11 },
];
