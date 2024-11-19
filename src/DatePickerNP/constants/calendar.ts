export const YEARS_LIST = Array.from({ length: 2099 - 2000 + 1 }, (_, i) => ({
  year: 2000 + i,
  index: i,
}));

export const MONTHS_IN_WORDS = [
  { name_np: "बैशाख", name_en: "Baisakh", month_position: 1 },
  { name_np: "जेठ", name_en: "Jestha", month_position: 2 },
  { name_np: "असार", name_en: "Asar", month_position: 3 },
  { name_np: "साउन", name_en: "Shrawan", month_position: 4 },
  { name_np: "भदौ", name_en: "Bhadra", month_position: 5 },
  { name_np: "आश्विन", name_en: "Ashwin", month_position: 6 },
  { name_np: "कार्तिक", name_en: "Kartik", month_position: 7 },
  { name_np: "मंसिर", name_en: "Mangsir", month_position: 8 },
  { name_np: "पुष", name_en: "Poush", month_position: 9 },
  { name_np: "माघ", name_en: "Magh", month_position: 10 },
  { name_np: "फागुन", name_en: "Falgun", month_position: 11 },
  { name_np: "चैत", name_en: "Chaitra", month_position: 12 },
];

export const DAYS_OF_WEEK = [
  { name_en: "Sun", name_np: "आइत", week_position: 1 },
  { name_en: "Mon", name_np: "सोम", week_position: 2 },
  { name_en: "Tue", name_np: "मंगल", week_position: 3 },
  { name_en: "Wed", name_np: "बुध", week_position: 4 },
  { name_en: "Thu", name_np: "बिही", week_position: 5 },
  { name_en: "Fri", name_np: "शुक्र", week_position: 6 },
  { name_en: "Sat", name_np: "शनि", week_position: 7 },
];

export const INITIAL_YEAR_OF_CALENDAR = YEARS_LIST[0].year;
export const FINAL_YEAR_OF_CALENDAR = YEARS_LIST[YEARS_LIST.length - 1].year;

export const DEFAULT_INPUT_HEIGHT = 32;
export const DEFAULT_CALENDAR_ICON_COLOR = "gray";
export const CALENDAR_WIDTH = 220;
export const CALENDAR_HEIGHT = 284;
