import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP, { calculateAge } from "./DatePickerNP";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const age1 = calculateAge("2058-10-11");
  const age2 = calculateAge("2058-01-08");
  const age3 = calculateAge("2058-02-23");

  console.log({ age1, age2, age3 }, "age");

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
    <App />
  </React.StrictMode>
);
