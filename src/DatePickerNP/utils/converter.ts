import {
  NEPALI_DATES,
  START_ENGLISH_DATE_OF_1978_BS,
} from "../constants/dates";
import { extractDateData, isValidNepaliDate } from "./dates";

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
