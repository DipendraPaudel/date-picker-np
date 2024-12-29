# date-picker-np

A lightweight and customizable Nepali Date Picker component for React, enabling users to select dates using the Nepali calendar. This component behaves similarly to the native HTML `<input type="date">`, making it easy to integrate into your React applications with full support for Nepali dates. It uses only CSS and core Javascript logic, with no external dependencies.

![Output](https://github.com/user-attachments/assets/692ea094-498e-49c6-a87c-0aa9891aed51)

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
import DatePickerNP from "date-picker-np";

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

## Props

| Prop                   | Type                          | Description                                                                                          | Required |
| ---------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| `value`                | `string`                      | The current date value in `YYYY-MM-DD` format.                                                       | Yes      |
| `onChange`             | `(date: string) => void`      | Callback function triggered when the date changes. Returns the selected date in `YYYY-MM-DD` format. | Yes      |
| `disabled`             | `boolean`                     | Disables the date picker input if set to `true`.                                                     | No       |
| `placeholder`          | `string`                      | Placeholder text for the input field.                                                                | No       |
| `min`                  | `string`                      | Minimum selectable date (in `YYYY-MM-DD` format).                                                    | No       |
| `max`                  | `string`                      | Maximum selectable date (in `YYYY-MM-DD` format).                                                    | No       |
| `lang`                 | `'en' \| 'np'`                | Sets the language for the date picker. Defaults to `'en'`.                                           | No       |
| `inputElement`         | `React.ReactNode`             | Custom React node to render as the input field.                                                      | No       |
| `inputContainerStyles` | `InputStyles`                 | Custom styles for the input container (see details below).                                           | No       |
| `menuPosition`         | `'auto' \| 'top' \| 'bottom'` | Specifies the position of the calendar dropdown menu. Defaults to `'auto'`.                          | No       |
| `hasCalendarIcon`      | `boolean`                     | Shows a calendar icon inside the input field if set to `true`.                                       | No       |
| `calendarIcon`         | `React.ReactNode`             | Custom React node to render as the calendar icon.                                                    | No       |
| `calendarColor`        | `string`                      | Specifies the color of the calendar icon.                                                            | No       |
| `calendarStyles`       | `CalendarStyles`              | Custom styles for calendar dates and footer (see details below).                                     | No       |

### InputStyles

The `inputContainerStyles` prop accepts the following properties:

- **border**: Sets the border style of the input.
- **width**: Specifies the width of the input field.
- **height**: Specifies the width of the input field.
- **padding**: Sets the padding inside the input field.
- **background**: Defines the background color of the input.
- **lineHeight**: Sets the lineHeight of text inside the input field.

### CalendarStyles

The `calendarStyles` prop accepts the following properties:

#### `dates`

Styles for calendar date cells.

- **`hoverBackgroundColor`**: Background color when hovering over a date.
- **`activeBackgroundColor`**: Background color of the selected date.
- **`activeTextColor`**: Text color of the selected date.

#### `footer`

Styles for the footer section of the calendar.

- **`textColor`**: Text color of the footer.

**Example Usage:**

```jsx
<DatePickerNP
  calendarStyles={{
    dates: {
      hoverBackgroundColor: "lightgreen",
      activeBackgroundColor: "rgb(0, 133, 177)",
      activeTextColor: "white",
    },
    footer: {
      textColor: "darkblue",
    },
  }}
/>
```

### Default Input Height and Minimum Height

- The default height of the input is 32px.
- The minimum height of the input is 28px.

## Utility Functions

The package also includes two utility functions for date conversion:

### `convertADToBS`

Converts english date to nepali date (AD to BS).

**Parameters:**

- `date: string` — A date string in `YYYY-MM-DD` format.

**Returns:**

- `string` — The equivalent BS date in `YYYY-MM-DD` format.

**Example:**

```js
import { convertADToBS } from "date-picker-np";

const bsDate = convertADToBS("2010-10-12");
console.log(bsDate); // Output: equivalent BS date
```

### `convertBSToAD`

Converts nepali date to english date (BS to AD).

**Parameters:**

- `date: string` — A date string in `YYYY-MM-DD` format.

**Returns:**

- `string` — The equivalent AD date in `YYYY-MM-DD` format.

**Example:**

```js
import { convertBSToAD } from "date-picker-np";

const adDate = convertBSToAD("2074-04-12");
console.log(adDate); // Output: equivalent AD date
```

## Supported Nepali Date Range

The date picker supports selecting dates within the range:

- **Minimum Date**: `1978-01-01`
- **Maximum Date**: `2099-12-31`

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/DipendraPaudel/date-picker-np/blob/main/LICENSE) file for details.

## Support

If you have any questions, issues, or feature requests, please open an issue in the [GitHub repository](https://github.com/DipendraPaudel/date-picker-np/issues).

```

```
