import {
  getTodayBSDate,
  isGreaterThanOrEqualToMinDate,
  isLessThanOrEqualToMaxDate,
  isValidNepaliDate,
} from "./dates";
import { formatDate } from "./formatter";

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

export const getDisplayDate = (
  value: string,
  min?: string,
  max?: string,
  isValid?: boolean
) => {
  /*
      Display date priority 
        --> passed value if valid
        --> today bs date if lies in between min and max
        --> min date if valid
        --> max date if valid
  */

  const todayBSDate = getTodayBSDate();

  let displayValue = todayBSDate;

  if (isValid && liesInBetween(value, min, max)) return value;
  else {
    if (liesInBetween(todayBSDate, min, max)) displayValue = todayBSDate;
    else if (min && isValidNepaliDate(min)) displayValue = min;
    else if (max && isValidNepaliDate(max)) displayValue = max;
  }

  displayValue = formatDate(displayValue);
  displayValue = displayValue.slice(0, 8) + "dd";

  return displayValue;
};
