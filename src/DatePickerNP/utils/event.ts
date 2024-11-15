import { isValidNepaliDate } from "./dates";

export const clickEvent = ({
  event,
  container,
  input,
}: {
  event: MouseEvent;
  container: HTMLDivElement;
  input: HTMLInputElement;
}) => {
  const clickedElement = event.target as Node;

  if (clickedElement === container || container.contains(clickedElement))
    return;

  const currentValue = input.value;
  const isValid = isValidNepaliDate(currentValue);

  return isValid ? currentValue : "";
};
