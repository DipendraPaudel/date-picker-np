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
      onChange={(date) => setSelectedDate(date)}
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
| `value`                | `string`                  | The current date value in `YYYY-MM-DD` format.                                                       | No       |
| `onChange`             | `(date?: string) => void` | Callback function triggered when the date changes. Returns the selected date in `YYYY-MM-DD` format. | Yes      |
| `disabled`             | `boolean`                 | Disables the date picker input if set to `true`.                                                     | No       |
| `placeholder`          | `string`                  | Placeholder text for the input field.                                                                | No       |
| `min`                  | `string`                  | Minimum selectable date (in `YYYY-MM-DD` format).                                                    | No       |
| `max`                  | `string`                  | Maximum selectable date (in `YYYY-MM-DD` format).                                                    | No       |
| `inputElement`         | `React.ReactNode`         | Custom React node to render as the input field.                                                      | No       |
| `inputContainerStyles` | `InputStyles`             | Custom styles for the input container (see details below).                                           | No       |
| `hasCalendarIcon`      | `boolean`                 | Shows a calendar icon inside the input field if set to `true`.                                       | No       |
| `calendarIcon`         | `React.ReactNode`         | Custom React node to render as the calendar icon.                                                    | No       |
| `calendarColor`        | `string`                  | Specifies the color of the calendar icon.                                                            | No       |

### InputStyles

The `inputContainerStyles` prop accepts the following properties:

- **border**: Sets the border style of the input.
- **width**: Specifies the width of the input field.
- **height**: Specifies the width of the input field.
- **padding**: Sets the padding inside the input field.
- **background**: Defines the background color of the input.
- **lineHeight**: Sets the lineHeight of text inside the input field.

## Support

If you have any questions, issues, or feature requests, please open an issue in the [GitHub repository](https://github.com/DipendraPaudel/date-picker-np/issues).
