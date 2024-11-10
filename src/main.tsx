import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [date, setDate] = useState("2017-01-01");

  return (
    <DatePickerNP
      value={date}
      onChange={(date?: string) => setDate(date as string)}
      min="2015-02-02"
      max="2017-03-15"
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />

    <input type="date" />
  </React.StrictMode>
);
