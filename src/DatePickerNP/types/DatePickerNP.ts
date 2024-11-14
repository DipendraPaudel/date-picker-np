import React from "react";

import { InputStyles } from "./DatePickerInput";

export type DatePickerNPProps = {
  value?: string;
  onChange: (date?: string) => void;
  disabled?: boolean;
  placeholder?: string;

  min?: string;
  max?: string;

  inputElement?: React.ReactNode;
  inputContainerStyles?: InputStyles;
};
