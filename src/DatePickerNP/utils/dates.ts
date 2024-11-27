import {
  NEPALI_DATES,
  START_ENGLISH_DATE_OF_1978_BS,
} from "../constants/dates";

// helper function to return year, month and day
export const extractDateData = (date: string) => {
  try {
    const [year, month, day] = date.split("-");

    return {
      year,
      month,
      day,
    };
  } catch (e) {
    return {
      year: "yyyy",
      month: "mm",
      day: "dd",
    };
  }
};

// helper function to check is passed date is valid nepali date
export const isValidNepaliDate = (date?: string) => {
  if (!date) return false;

  try {
    const { year, month, day } = extractDateData(date);

    const activeYear = NEPALI_DATES.find(({ year: year1 }) => year1 === +year);

    // if year is not in the list, date is not valid
    if (!activeYear) return false;

    // if day lies between 1 and total days count in month;
    return (+day >= 1 && +day <= activeYear.months[+month - 1]) || day === "dd";
  } catch (e) {
    return false;
  }
};

// helper function to get number of days in certain month
export const getNumberOfDaysInMonth = (date: string) => {
  try {
    const { year, month } = extractDateData(date);

    const activeData = NEPALI_DATES.find(({ year: year1 }) => year1 === +year);

    if (!activeData) return 0;

    return activeData.months[+month - 1];
  } catch (e) {
    return 0;
  }
};

// helper function to get number of days in previous month
export const getNumberOfDaysInPreviousMonth = (date: string) => {
  try {
    const { year, month } = extractDateData(date);

    // if the current month is baisakh
    if (+month === 1) {
      if (+year > NEPALI_DATES[0].year) {
        return getNumberOfDaysInMonth(`${+year - 1}-12-dd`); // since number of day in months is not dependent in day, value 'dd' is passed
      } else return 0;
    }

    return getNumberOfDaysInMonth(`${year}-${+month - 1}-dd`);
  } catch (e) {
    return 0;
  }
};

// helper function to move to previous month
export const getPreviousMonth = (date: string) => {
  try {
    const { year, month } = extractDateData(date);

    if (+month === 1) {
      if (+year > NEPALI_DATES[0].year) {
        return `${+year - 1}-12-dd`;
      }
    }

    return `${year}-${(+month - 1).toString().padStart(2, "0")}-dd`;
  } catch (e) {
    return "";
  }
};

// helper function to move to next month
export const getNextMonth = (date: string) => {
  try {
    const { year, month } = extractDateData(date);

    if (+month === 12) {
      if (+year < NEPALI_DATES[NEPALI_DATES.length - 1].year) {
        return `${+year + 1}-01-dd`;
      }
    }

    return `${year}-${(+month + 1).toString().padStart(2, "0")}-dd`;
  } catch (e) {
    return "";
  }
};

// helper function to get today nepali date
export const getTodayBSDate = () => {
  const englishDaysDifferenceFrom2000BS = Math.ceil(
    (new Date().getTime() - new Date(START_ENGLISH_DATE_OF_1978_BS).getTime()) /
      (86400 * 1000)
  );

  let nepaliDateCountUptoTodayEnglishDate = 0;

  for (let i = 0; i < NEPALI_DATES.length; i++) {
    const { year, months } = NEPALI_DATES[i];

    for (let j = 0; j < months.length; j++) {
      const addedCount = nepaliDateCountUptoTodayEnglishDate + months[j];

      if (addedCount < englishDaysDifferenceFrom2000BS) {
        nepaliDateCountUptoTodayEnglishDate = addedCount;
      } else {
        const month = (j + 1).toString().padStart(2, "0");
        const today = (
          englishDaysDifferenceFrom2000BS - nepaliDateCountUptoTodayEnglishDate
        )
          .toString()
          .padStart(2, "0");

        return `${year}-${month}-${today}`;
      }
    }
  }

  return "";
};

// helper function to detect if given date is greater than or equal to min date
// to disable dates which are less than min dates
export const isGreaterThanOrEqualToMinDate = (
  date: string,
  minDate: string
) => {
  const { year: year1, month: month1, day: day1 } = extractDateData(date);
  const { year: year2, month: month2, day: day2 } = extractDateData(minDate);

  const isDayNotValid = isNaN(+day1) || isNaN(+day2);

  if (year1 === year2) {
    if (month1 === month2) {
      return isDayNotValid ? true : +day1 >= +day2;
    } else return +month1 >= +month2;
  } else return +year1 >= +year2;
};

// helper function to detect if given date is greater than or equal to min date
// to disable dates which are greater than max dates
export const isLessThanOrEqualToMaxDate = (date: string, maxDate: string) => {
  const { year: year1, month: month1, day: day1 } = extractDateData(date);
  const { year: year2, month: month2, day: day2 } = extractDateData(maxDate);

  const isDayNotValid = isNaN(+day1) || isNaN(+day2);

  if (year1 === year2) {
    if (month1 === month2) {
      return isDayNotValid ? true : +day1 <= +day2;
    } else return +month1 <= +month2;
  } else return +year1 <= +year2;
};
