import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from "../constants/calendar";
import { MenuPositionEnum } from "../enums";
import { MenuPositionType } from "../types/DatePickerNP";

export const calculateCalendarPosition = (container: HTMLDivElement) => {
  let x = 0,
    y = 0;

  const containerPositions = container.getBoundingClientRect();

  const xPosition = containerPositions.left;
  const yPosition = containerPositions.top;

  const innerWidth = window.document.documentElement.scrollWidth;

  const combinedX = xPosition + CALENDAR_WIDTH;
  const combinedY = yPosition + CALENDAR_HEIGHT + containerPositions.height;

  x = combinedX > innerWidth ? -combinedX + innerWidth : 0;

  if (
    combinedY > innerHeight &&
    innerHeight > CALENDAR_HEIGHT + containerPositions.height &&
    yPosition > CALENDAR_HEIGHT
  )
    y = -1;
  else y = 1;

  return { x, y };
};

export const getVerticalScrollbarWidth = () => {
  return window.innerWidth - window.document.documentElement.clientWidth;
};

// function to get the top position of the calendar menu
export const getMenuTopPosition = (
  menuPosition: MenuPositionType,
  yCoordinate: number,
  inputContainerHeight: number
) => {
  if (menuPosition === MenuPositionEnum.AUTO) {
    return yCoordinate > 0 ? inputContainerHeight + 2 : -CALENDAR_HEIGHT;
  }

  if (menuPosition === MenuPositionEnum.TOP) return -CALENDAR_HEIGHT;

  return inputContainerHeight + 2;
};
