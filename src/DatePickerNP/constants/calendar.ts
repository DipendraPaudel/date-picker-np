export const YEARS_LIST = Array.from(
  { length: new Date().getFullYear() - 1999 },
  (_, i) => ({
    year: 2000 + i,
    index: i,
  })
);

export const MONTHS_IN_WORDS = [
  { name: "January", shortName: "Jan", index: 0 },
  { name: "February", shortName: "Feb", index: 1 },
  { name: "March", shortName: "Mar", index: 2 },
  { name: "April", shortName: "Apr", index: 3 },
  { name: "May", shortName: "May", index: 4 },
  { name: "June", shortName: "Jun", index: 5 },
  { name: "July", shortName: "Jul", index: 6 },
  { name: "August", shortName: "Aug", index: 7 },
  { name: "September", shortName: "Sep", index: 8 },
  { name: "October", shortName: "Oct", index: 9 },
  { name: "November", shortName: "Nov", index: 10 },
  { name: "December", shortName: "Dec", index: 11 },
];
