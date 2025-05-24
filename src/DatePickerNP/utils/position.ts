import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from "../constants/calendar";
import { MenuPositionEnum } from "../enums";
import { MenuPositionType, PositionType } from "../types/DatePickerNP";

export const calculateCalendarPosition = (
  container: HTMLDivElement,
  position: PositionType
) => {
  let x = 0,
    y = 0;

  const containerPositions = container.getBoundingClientRect();

  const xPosition = containerPositions.left;
  const yPosition = containerPositions.top;

  const innerWidth = window.document.documentElement.scrollWidth;

  const combinedX = xPosition + CALENDAR_WIDTH;
  const combinedY = yPosition + CALENDAR_HEIGHT + containerPositions.height;

  if (position === "fixed") {
    x =
      combinedX > innerWidth
        ? innerWidth - CALENDAR_WIDTH
        : containerPositions.x;
  } else {
    x = combinedX > innerWidth ? -combinedX + innerWidth : 0;
  }

  if (
    combinedY > innerHeight &&
    innerHeight > CALENDAR_HEIGHT + containerPositions.height &&
    yPosition > CALENDAR_HEIGHT
  )
    y = -1 * (position === "fixed" ? containerPositions.y : 1);
  else y = 1 * (position === "fixed" ? containerPositions.y : 1);

  return { x, y };
};

export const getVerticalScrollbarWidth = () => {
  return window.innerWidth - window.document.documentElement.clientWidth;
};

// function to get the top position of the calendar menu
export const getMenuTopPosition = (
  menuPosition: MenuPositionType,
  yCoordinate: number,
  inputContainerHeight: number,
  position: PositionType
) => {
  if (position === "fixed") {
    if (window.innerHeight < CALENDAR_HEIGHT + inputContainerHeight) return 0;

    if (
      Math.abs(yCoordinate) + CALENDAR_HEIGHT + inputContainerHeight >
        window.innerHeight &&
      Math.abs(yCoordinate) > CALENDAR_HEIGHT
    )
      return Math.abs(yCoordinate) - CALENDAR_HEIGHT;

    return yCoordinate > 0 ? yCoordinate + inputContainerHeight + 2 : 0;
  }

  if (menuPosition === MenuPositionEnum.AUTO) {
    return yCoordinate > 0 ? inputContainerHeight + 2 : -CALENDAR_HEIGHT;
  }

  if (menuPosition === MenuPositionEnum.TOP) return -CALENDAR_HEIGHT;

  return inputContainerHeight + 2;
};
