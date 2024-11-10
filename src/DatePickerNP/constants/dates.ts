import { NepaliDatesType } from "../types/Constant";

export const START_WEEK_DAY_OF_2000 = 4;
export const START_ENGLISH_DATE_OF_2000_BS = "1943-04-14";

const ALL_NEPALI_DATES: Partial<NepaliDatesType>[] = [
  { year: 2000, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2001, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2002, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2003, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2004, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2005, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2006, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2007, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2008, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31] },
  { year: 2009, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2010, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2011, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2012, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30] },
  { year: 2013, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2014, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2015, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2016, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30] },
  { year: 2017, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2018, months: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2019, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2020, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2021, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2022, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30] },
  { year: 2023, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2024, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2025, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2026, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2027, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2028, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2029, months: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2030, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2031, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2032, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2033, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2034, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2035, months: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31] },
  { year: 2036, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2037, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2038, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2039, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30] },
  { year: 2040, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2041, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2042, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2043, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30] },
  { year: 2044, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2045, months: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2046, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2047, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2048, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2049, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30] },
  { year: 2050, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2051, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2052, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2053, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30] },
  { year: 2054, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2055, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2056, months: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2057, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2058, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2059, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2060, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2061, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2062, months: [31, 31, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31] },
  { year: 2063, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2064, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2065, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2066, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31] },
  { year: 2067, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2068, months: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2069, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2070, months: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30] },
  { year: 2071, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2072, months: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2073, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
  { year: 2074, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2075, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2076, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30] },
  { year: 2077, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2078, months: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2079, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30] },
  { year: 2080, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30] },
  { year: 2081, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31] },
  { year: 2082, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2083, months: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2084, months: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2085, months: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30] },
  { year: 2086, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2087, months: [31, 31, 32, 31, 31, 31, 30, 30, 30, 30, 30, 30] },
  { year: 2088, months: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30] },
  { year: 2089, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2090, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2091, months: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30] },
  { year: 2092, months: [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2093, months: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2094, months: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2095, months: [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30] },
  { year: 2096, months: [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30] },
  { year: 2097, months: [31, 32, 31, 31, 31, 30, 30, 30, 29, 30, 30, 30] },
  { year: 2098, months: [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31] },
  { year: 2099, months: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31] },
];

export const getStartWeek = () => {
  let lastWeekDay = START_WEEK_DAY_OF_2000;

  for (let i = 0; i < ALL_NEPALI_DATES.length; i++) {
    const currentData = ALL_NEPALI_DATES[i] as NepaliDatesType;

    ALL_NEPALI_DATES[i].startWeek = currentData.months.map((month) => {
      const startWeekDay = lastWeekDay;
      lastWeekDay = (month + startWeekDay) % 7;
      lastWeekDay = lastWeekDay === 0 ? 7 : lastWeekDay;

      return startWeekDay;
    });
  }
};

getStartWeek();

export const NEPALI_DATES = ALL_NEPALI_DATES as NepaliDatesType[];