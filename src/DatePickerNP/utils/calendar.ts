import { MONTHS_IN_WORDS } from "../constants/calendar";

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

export const getFormattedDate = (date?: string) => {
  if (!date) return [0, 0, 0];

  return date.split("-").map((d) => +d);
};
