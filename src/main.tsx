import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePickerNP
      value={selectedDate}
      onChange={(date) => setSelectedDate(date || "")}
      placeholder="Select Date" // Default
      inputContainerStyles={{
        // padding: "8px",
        background: "white", // Default
        border: "1px solid #bbb", // Default
        height: 40, // Default
        width: "200px",
      }}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
