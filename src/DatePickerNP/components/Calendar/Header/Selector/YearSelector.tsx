import { useEffect, useRef } from "react";

import { YearSelectorProps } from "../../../../types/Calendar";
import { YEARS_LIST } from "../../../../constants/calendar";
import { numberConversion } from "../../../../utils/number";

const YearSelector = ({
  selectedYear,
  setSelectedYear,
  setActiveSelector,
  lang,
  minYear,
  maxYear,
}: YearSelectorProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // function to handle year change and display months selector active
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setActiveSelector("month");
  };

  useEffect(() => {
    const container = containerRef.current!;

    const yearsElement = container.children;

    // loop through every elements and scroll into the current selected year
    // finally break out of the loop if selected year is found and scoll upto that element
    for (let i = 0; i < yearsElement.length; i++) {
      if (
        yearsElement[i].textContent ===
        String(numberConversion(lang, selectedYear))
      ) {
        yearsElement[i].scrollIntoView({
          block: "nearest",
          inline: "nearest",
        });
        break;
      }
    }
  }, [selectedYear, lang]);

  return (
    <div
      ref={containerRef}
      className="date-picker-year-selector-block-container"
    >
      {YEARS_LIST.map((year) => {
        const isSelected = year === selectedYear;
        const isDisabled = year < minYear || year > maxYear;

        return (
          <div
            key={year}
            onClick={() => !isDisabled && handleYearChange(year)}
            className={`
              ${isSelected ? "date-picker-year-selector-block-selected" : ""} ${
              isDisabled ? "date-picker-selector-block-disabled" : ""
            }`}
          >
            {numberConversion(lang, year)}
          </div>
        );
      })}
    </div>
  );
};

export default YearSelector;
