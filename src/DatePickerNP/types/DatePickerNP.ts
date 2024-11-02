export type DatePickerNPProps = {
  value?: string;
  onChange: (date?: string) => void;
  disabled?: boolean;

  min?: string;
  max?: string;

  inputHeight?: number;
};
