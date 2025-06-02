import {
  NEPALI_DATES,
  START_ENGLISH_DATE_OF_1978_BS,
} from "../constants/dates";
import { liesInBetween } from "./calendar";
import {
  extractDateData,
  getPreviousMonth,
  getTodayBSDate,
  isValidNepaliDate,
} from "./dates";

// convert english to nepali dates
export const convertADToBS = (englishDate: string) => {
  if (!englishDate || typeof englishDate !== "string") return "";

  try {
    const englishDaysDifferenceFrom1978BS =
      Math.ceil(
        (new Date(englishDate).getTime() -
          new Date(START_ENGLISH_DATE_OF_1978_BS).getTime()) /
          (86400 * 1000)
      ) + 1;

    let nepaliDateCount = 0;

    for (let i = 0; i < NEPALI_DATES.length; i++) {
      const { year, months } = NEPALI_DATES[i];

      for (let j = 0; j < months.length; j++) {
        const addedCount = nepaliDateCount + months[j];

        if (addedCount < englishDaysDifferenceFrom1978BS) {
          nepaliDateCount = addedCount;
        } else {
          const month = (j + 1).toString().padStart(2, "0");
          const today = (englishDaysDifferenceFrom1978BS - nepaliDateCount)
            .toString()
            .padStart(2, "0");

          return `${year}-${month}-${today}`;
        }
      }
    }
  } catch (e) {
    return "";
  }

  return "";
};

// convert nepali to english dates
export const convertBSToAD = (nepaliDate: string) => {
  if (
    !nepaliDate ||
    typeof nepaliDate !== "string" ||
    !isValidNepaliDate(nepaliDate)
  ) {
    return "";
  }

  try {
    let nepaliDaysDifferenceFrom1978BS = 0;

    const { year, month, day } = extractDateData(nepaliDate);

    for (let i = 0; i < NEPALI_DATES.length; i++) {
      const currentNepaliDateData = NEPALI_DATES[i];

      if (currentNepaliDateData.year === +year) {
        for (let j = 0; j < currentNepaliDateData.months.length; j++) {
          const currentMonthCount = currentNepaliDateData.months[j];

          if (j + 1 < +month) {
            nepaliDaysDifferenceFrom1978BS += currentMonthCount;
          } else {
            // break out of loop when month matches
            nepaliDaysDifferenceFrom1978BS += +day - 1;
            break;
          }
        }

        // break out of the loop when year matches
        break;
      } else {
        // keep adding the number of days of each months in nepaliDaysDifferenceFrom1978BS
        currentNepaliDateData.months.forEach((month) => {
          nepaliDaysDifferenceFrom1978BS += month;
        });
      }
    }

    const englishDate = new Date(
      nepaliDaysDifferenceFrom1978BS * 24 * 60 * 60 * 1000 +
        new Date(START_ENGLISH_DATE_OF_1978_BS).getTime()
    );

    return englishDate.toISOString().split("T")[0];
  } catch (e) {
    return "";
  }
};

export const calculateAge = (dateOfBirth: string) => {
  if (!isValidNepaliDate(dateOfBirth)) {
    console.error("Invalid date passed.");
    return {};
  }

  const todayBSDate = getTodayBSDate();

  if (!liesInBetween(dateOfBirth, "", todayBSDate)) {
    console.error("Date of birth should not be future date.");
    return {};
  }

  let years = 0;
  let months = 0;
  let days = 0;

  console.log({ todayBSDate, dateOfBirth });

  try {
    const {
      year: year1,
      month: month1,
      day: day1,
    } = extractDateData(dateOfBirth);
    const {
      year: year2,
      month: month2,
      day: day2,
    } = extractDateData(todayBSDate);

    if (isNaN(+year1) || isNaN(+month1) || isNaN(+day1)) {
      return {};
    }

    // Case for years difference
    if (+month2 > +month1) {
      years = +year2 - +year1;
    } else if (+month2 === +month1) {
      years = +year2 - +year1;

      if (+day2 < +day1) years--;
    } else {
      years = +year2 - +year1 - 1;
    }

    if (years < 0) years = 0;

    // Case for months
    if (+year2 - years > +year1) {
      months = 12 - +month1;
      months += +month2;
      if (+day2 < +day1) months--;
    } else {
      months = +month2 - +month1;
      if (+day2 < +day1) months--;
    }

    // Case for days
    let monthDiff = +month1 + months;
    if (monthDiff >= 12) monthDiff = monthDiff - 12;

    if (+month2 - monthDiff != 0) {
      const { year: prevYear, month: prevMonth } = extractDateData(
        getPreviousMonth(todayBSDate)
      );

      const currentYearData = NEPALI_DATES.find(
        (date) => date.year === +prevYear
      );

      if (!currentYearData) return {};

      days = currentYearData.months[+prevMonth - 1] - +day1;
      days += +day2;
    } else {
      days = +day2 - +day1;
    }
  } catch (e) {
    return {};
  }

  return { years, months, days };
};
