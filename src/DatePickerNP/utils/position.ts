import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from "../constants/calendar";

export const calculateCalendarPosition = (container: HTMLDivElement) => {
  let x = 0,
    y = 0;

  const containerPositions = container.getBoundingClientRect();

  const xPosition = containerPositions.left;
  const yPosition = containerPositions.top;

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  const combinedX = xPosition + CALENDAR_WIDTH + getVerticalScrollbarWidth();
  const combinedY = yPosition + CALENDAR_HEIGHT;

  // for x position (left)
  x = combinedX > innerWidth ? -combinedX + innerWidth : 0;
  y = combinedY > innerHeight ? -1 : 1;

  return { x, y };
};

export const getVerticalScrollbarWidth = () => {
  return window.innerWidth - window.document.documentElement.clientWidth;
};
