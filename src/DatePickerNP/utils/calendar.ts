import { MONTHS_IN_WORDS, YEARS_LIST } from "../constants/calendar";

export const getActiveThreeMonths = (selected: number) => {
  if (selected === 0)
    return [MONTHS_IN_WORDS[11], MONTHS_IN_WORDS[0], MONTHS_IN_WORDS[1]];

  if (selected === 11)
    return [...MONTHS_IN_WORDS.slice(10, 12), MONTHS_IN_WORDS[0]];

  return MONTHS_IN_WORDS.slice(
    Math.max(selected - 1, 0),
    Math.min(selected + 2, 12)
  );
};

export const getActiveThreeYears = (selectedYear: number) => {
  const selectedIndex = YEARS_LIST.findIndex((y) => y.year === selectedYear);
  const lastIndex = YEARS_LIST.length - 1;

  if (selectedIndex === 0) return YEARS_LIST.slice(0, 3);
  if (selectedIndex === lastIndex)
    return YEARS_LIST.slice(lastIndex - 2, lastIndex + 1);

  return YEARS_LIST.slice(selectedIndex - 1, selectedIndex + 2);
};

export const getFormattedDate = (date?: string) => {
  if (!date) return [0, 0, 0];

  return date.split("-").map((d) => +d);
};
