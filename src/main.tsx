import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import DatePickerNP from "./DatePickerNP";
import { convertADToBS, convertBSToAD } from "./DatePickerNP/utils";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const result = convertADToBS("2010-10-12");
  const adDate = convertBSToAD(selectedDate);
  console.log(result, "result", adDate);

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
    <App />
  </React.StrictMode>
);
