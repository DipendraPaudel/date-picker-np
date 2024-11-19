import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from "../constants/calendar";

export const calculateCalendarPosition = (container: HTMLDivElement) => {
  let x = 0,
    y = 0;

  const containerPositions = container.getBoundingClientRect();

  const xPosition = containerPositions.left;
  const yPosition = containerPositions.top;

  const innerWidth = window.document.documentElement.scrollWidth;
  const innerHeight = window.document.documentElement.scrollHeight;

  const combinedX = xPosition + CALENDAR_WIDTH;
  const combinedY = yPosition + CALENDAR_HEIGHT;

  console.log(
    window.document.documentElement.scrollHeight,
    window.document.documentElement.offsetHeight,
    "hello"
  );

  x = combinedX > innerWidth ? -combinedX + innerWidth : 0;
  y = combinedY > innerHeight ? -1 : 1;

  return { x, y };
};

export const getVerticalScrollbarWidth = () => {
  return window.innerWidth - window.document.documentElement.clientWidth;
};
