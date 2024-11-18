import { DatePickerCommonInputProps } from "./DatePickerInput";

export type DatePickerNPProps = DatePickerCommonInputProps & {
  value?: string;

  min?: string;
  max?: string;
};
