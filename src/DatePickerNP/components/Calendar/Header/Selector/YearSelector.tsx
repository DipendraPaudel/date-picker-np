import { useEffect, useRef } from "react";

import { YearSelectorProps } from "../../../../types/Calendar";
import { INITIAL_YEAR_OF_CALENDAR } from "../../../../constants/calendar";

const YearSelector = ({
  isActive,
  startYear,
  selectedYear,
  setSelectedYear,
  setActiveSelector,
  handleStartYearChange,
  minYear,
  maxYear,
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
    (_, index) => INITIAL_YEAR_OF_CALENDAR + index + startYear
  );

  return (
    <div
      ref={blockContainerRef}
      className={`date-picker-selector-block-container ${
        !isActive ? "date-picker-selector-block-container-hidden" : ""
      }`}
    >
      {yearsListToDisplay.map((year) => {
        const isSelected = year === selectedYear;
        const isDisabled = year < minYear || year > maxYear;

        return (
          <div
            key={year}
            onClick={() => !isDisabled && handleYearChange(year)}
            className={
              isDisabled ? "date-picker-selector-block-disabled" : undefined
            }
          >
            <div
              className={
                isSelected ? "date-picker-selector-block-selected" : undefined
              }
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
