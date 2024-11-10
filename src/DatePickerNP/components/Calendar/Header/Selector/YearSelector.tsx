import { useEffect, useRef } from "react";

import { YEARS_LIST } from "../../../../constants/calendar";
import { YearSelectorProps } from "../../../../types/Calendar";

const initialYearOfCalendar = YEARS_LIST[0].year;
const finalYearOfCalendar = YEARS_LIST[YEARS_LIST.length - 1].year;

const YearSelector = ({
  startYear,
  selectedYear,
  setSelectedYear,
  setActiveSelector,
  handleStartYearChange,
}: YearSelectorProps) => {
  const blockContainerRef = useRef<HTMLDivElement | null>(null);

  // function to handle year change and display months selector active
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setActiveSelector("month");
  };

  useEffect(() => {
    // capture wheel event and implement up and down year selection logic
    const handleWheel = (event: WheelEvent) => {
      const deltaY = event.deltaY;

      if (Math.abs(deltaY) < 15) return; // if wheeled less than 15 unit then do not change the years selection

      handleStartYearChange(deltaY);
    };

    // event listener to handle the wheel event in years selector options
    const element = blockContainerRef.current as HTMLDivElement;
    element.addEventListener("wheel", handleWheel);
    return () => element.removeEventListener("wheel", handleWheel);

    // eslint-disable-next-line
  }, []);

  // display only 12 years based on active start year in the selector
  const yearsListToDisplay = Array.from({ length: 12 }).map(
    (_, index) => initialYearOfCalendar + index + startYear
  );

  return (
    <div
      ref={blockContainerRef}
      className="date-picker-selector-block-container"
    >
      {yearsListToDisplay.map((year) => {
        const isSelected = year === selectedYear;
        const isDisabled = year > finalYearOfCalendar; // later handle min and max logic also

        return (
          <div key={year} onClick={() => handleYearChange(year)}>
            <div
              className={`${
                isSelected ? "date-picker-selector-block-selected" : undefined
              } ${isDisabled ? "date-picker-selector-block-disabled" : ""}`}
            >
              {year}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YearSelector;
