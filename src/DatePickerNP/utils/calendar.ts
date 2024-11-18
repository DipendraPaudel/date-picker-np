import {
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "./dates";

export const getFormattedDate = (date?: string) => {
  if (!date) return [0, 0, 0];

  return date.split("-").map((d) => +d);
};

export const liesInBetween = (value: string, min?: string, max?: string) => {
  if (!min && !max) return true;

  let isValid = false;

  if (min && isValidNepaliDate(min)) {
    if (isGreaterThanOrEqualToMinDate(value, min ?? "")) isValid = true;
    else return false;
  }

  if (max && isValidNepaliDate(max)) {
    if (isLessThanOrEqualToMaxDate(value, max ?? "")) isValid = true;
    else return false;
  }

  return isValid;
};
