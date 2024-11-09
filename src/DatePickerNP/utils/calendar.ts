import { MONTHS_IN_WORDS, YEARS_LIST } from "../constants/calendar";
import { extractDateData } from "./dates";

export const getActiveThreeMonths = (selected: number) => {
  if (selected === 1)
    return [MONTHS_IN_WORDS[11], MONTHS_IN_WORDS[0], MONTHS_IN_WORDS[1]];

  if (selected === 12)
    return [...MONTHS_IN_WORDS.slice(10, 12), MONTHS_IN_WORDS[0]];

  return MONTHS_IN_WORDS.slice(
    Math.max(selected - 2, 0),
    Math.min(selected + 1, 12)
  );
};

export const getActiveThreeYears = (
  selectedYear: number,
  min?: string,
  max?: string
) => {
  let filteredYearsList = [...YEARS_LIST];
  const lastYear = YEARS_LIST[YEARS_LIST.length - 1].year;

  if (min || max) {
    const { year: minYear } = extractDateData(min as string);
    const { year: maxYear } = extractDateData(max as string);

    filteredYearsList = filteredYearsList.filter(
      ({ year }) => year >= (+minYear || 0) && year <= (+maxYear || lastYear)
    );
  }

  const selectedIndex = filteredYearsList.findIndex(
    (y) => y.year === selectedYear
  );
  const lastIndex = filteredYearsList.length - 1;

  if (selectedIndex === 0) return filteredYearsList.slice(0, 3);
  if (selectedIndex === lastIndex)
    return filteredYearsList.slice(lastIndex - 2, lastIndex + 1);

  return filteredYearsList.slice(selectedIndex - 1, selectedIndex + 2);
};

export const getFormattedDate = (date?: string) => {
  if (!date) return [0, 0, 0];

  return date.split("-").map((d) => +d);
};
