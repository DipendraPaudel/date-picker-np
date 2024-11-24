import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePickerNP
      value={selectedDate}
      onChange={(date) => setSelectedDate(date || "")}
      calendarColor="red"
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
