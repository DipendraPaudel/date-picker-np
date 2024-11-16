# date-picker-np

A lightweight and customizable Nepali Date Picker component for React, enabling users to select dates using the Nepali calendar. This component behaves similarly to the native HTML `<input type="date">`, making it easy to integrate into your React applications with full support for Nepali dates. It uses only CSS and core Javascript logic, with no external dependencies.

## Installation

Install the package using npm:

```bash
npm install date-picker-np
```

or using yarn:

```bash
yarn add date-picker-np
```

## Usage

Here's a basic example of how to use the date-picker-np in your React project:

```jsx
import React, { useState } from "react";
import DatePickerNp from "date-picker-np";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePickerNP
      value={selectedDate}
      onChange={(date) => setSelectedDate(date || "")}
      placeholder="Select Nepali Date"
      min="2075-01-01"
      max="2090-12-30"
      inputContainerStyles={{
        padding: "8px",
        background: "#f7f7f7",
        width: "200px",
        border: "1px solid #ccc",
        height: 40, // Default height
      }}
    />
  );
};

export default App;
```

### Default Input Height and Minimum Height

- The default height of the input is 40px.
- The minimum height of the input is 28px.

## Props

| Prop                   | Type                      | Description                                                                                          | Required |
| ---------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| `value`                | `string`                  | The current date value in `YYYY-MM-DD` format.                                                       | Optional |
| `onChange`             | `(date?: string) => void` | Callback function triggered when the date changes. Returns the selected date in `YYYY-MM-DD` format. | Required |
| `disabled`             | `boolean`                 | Disables the date picker input if set to `true`.                                                     | Optional |
| `placeholder`          | `string`                  | Placeholder text for the input field.                                                                | Optional |
| `min`                  | `string`                  | Minimum selectable date (in `YYYY-MM-DD` format).                                                    | Optional |
| `max`                  | `string`                  | Maximum selectable date (in `YYYY-MM-DD` format).                                                    | Optional |
| `inputElement`         | `React.ReactNode`         | Custom React node to render as the input field.                                                      | Optional |
| `inputContainerStyles` | `InputStyles`             | Custom styles for the input container (see details below).                                           | Optional |

### InputStyles

The `inputContainerStyles` prop accepts the following properties:

- **padding**: Sets the padding inside the input field.
- **background**: Defines the background color of the input.
- **width**: Specifies the width of the input field.
- **border**: Sets the border style of the input.
- **height**: Ensures proper positioning of the calendar dropdown. Must be a number.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Support

If you have any questions, issues, or feature requests, please open an issue in the [GitHub repository](https://github.com/DipendraPaudel/date-picker-np).
