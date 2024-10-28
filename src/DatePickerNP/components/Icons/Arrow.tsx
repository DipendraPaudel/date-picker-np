import { ArrowIconProps } from "../../types/Calendar";

export const ArrowRightIcon = ({ onClick }: ArrowIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#262E3C"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftIcon = ({ onClick }: ArrowIconProps) => {
  return (
    <div
      style={{
        transform: "rotate(180deg)",
        display: "flex",
      }}
    >
      <ArrowRightIcon onClick={onClick} />
    </div>
  );
};

export const ArrowTopIcon = ({ onClick }: ArrowIconProps) => {
  return (
    <div
      style={{
        transform: "rotate(-90deg)",
        display: "flex",
      }}
    >
      <ArrowRightIcon onClick={onClick} />
    </div>
  );
};

export const ArrowBottomIcon = ({ onClick }: ArrowIconProps) => {
  return (
    <div
      style={{
        transform: "rotate(90deg)",
        display: "flex",
      }}
    >
      <ArrowRightIcon onClick={onClick} />
    </div>
  );
};
