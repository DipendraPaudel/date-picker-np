import { NEPALI_NUMBERS } from "../constants/number";

export const numberConversion = (lang?: "en" | "np", num?: number | string) => {
  // Mapping of English digits to Nepali digits

  if (!num || lang === "en") return num;

  // Convert the number to a string and replace each digit
  return num
    .toString()
    .split("")
    .map((char) => {
      return char >= "0" && char <= "9" ? NEPALI_NUMBERS[+char] : char;
    })
    .join("");
};
