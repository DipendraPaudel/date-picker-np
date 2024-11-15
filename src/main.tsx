import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [date, setDate] = useState("");

  return (
    <DatePickerNP
      value={date}
      onChange={(date?: string) => setDate(date as string)}
      placeholder="Select date of birth"
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Email" />
    <App />
  </React.StrictMode>
);
