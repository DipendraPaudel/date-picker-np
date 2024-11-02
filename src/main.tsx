import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [date, setDate] = useState("2081-7-35");

  return (
    <DatePickerNP
      value={date}
      onChange={(date?: string) => setDate(date as string)}
      min="2081-02-02"
      max="2081-03-15"
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
