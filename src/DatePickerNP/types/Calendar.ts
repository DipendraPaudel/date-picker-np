import React from "react";

export type ArrowIconProps = {
  onClick: () => void;
};

export type DropdownProps = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};
