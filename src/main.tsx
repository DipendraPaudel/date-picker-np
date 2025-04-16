import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePickerNP
      value={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      inputContainerStyles={{
        width: "100%",
      }}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <p
      style={{
        height: "200px",
        background: "lightgray",
        overflow: "auto",
      }}
    >
      <App />
    </p>
  </React.StrictMode>
);
