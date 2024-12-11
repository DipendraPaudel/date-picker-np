import { useEffect, useRef } from "react";

import { YearSelectorProps } from "../../../../types/Calendar";
import { YEARS_LIST } from "../../../../constants/calendar";

const YearSelector = ({
  // startYear,
  selectedYear,
  setSelectedYear,
  setActiveSelector,
}: // handleStartYearChange,
// minYear,
// maxYear,
// lang,
YearSelectorProps) => {
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
    // finally break out of the loop
    for (let i = 0; i < yearsElement.length; i++) {
      if (yearsElement[i].textContent === String(selectedYear)) {
        yearsElement[i].scrollIntoView();
        break;
      }
    }
  }, [selectedYear]);

  return (
    <div
      ref={containerRef}
      className="date-picker-year-selector-block-container"
    >
      {YEARS_LIST.map((year) => (
        <div
          key={year}
          onClick={() => handleYearChange(year)}
          className={
            selectedYear === year
              ? "date-picker-year-selector-block-selected"
              : undefined
          }
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSelector;
