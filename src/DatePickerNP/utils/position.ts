import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from "../constants/calendar";

export const calculateCalendarPosition = (container: HTMLDivElement) => {
  let x = 0,
    y = 0;

  const containerPositions = container.getBoundingClientRect();

  const xPosition = containerPositions.left;
  const yPosition = containerPositions.top;

  const innerWidth = window.document.documentElement.scrollWidth;

  const combinedX = xPosition + CALENDAR_WIDTH;

  x = combinedX > innerWidth ? -combinedX + innerWidth : 0;

  if (
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
