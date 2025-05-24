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
      position="fixed"
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ display: "flex", backgroundColor: "gray" }}>
      <div style={{ width: "400px" }}></div>
      <p
        style={{
          flex: 1,
          height: "200px",
          background: "lightgray",
          overflow: "auto",
        }}
      >
        <App />
      </p>
    </div>
  </React.StrictMode>
);
