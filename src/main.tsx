import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";
import { getTodayBSDate } from "./DatePickerNP/utils/dates";

const App = () => {
  const [date, setDate] = useState("2070-12-25");

  console.log(getTodayBSDate());

  return (
    <DatePickerNP
      value={date}
      onChange={(date?: string) => setDate(date as string)}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
