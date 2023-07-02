import React from "react";
import CountdownTimer from "./components/CountDown";

export const App = () => {
  const { days, hours, minutes, seconds, nanoSeconds, status, message } =
    CountdownTimer(
      /** @param Staring time Parameter--- */
      "Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)",
      /** @param Ending time Parameter--- */
      "Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)"
    );
  console.log(days, hours, minutes, seconds, nanoSeconds, status, message);

  return null;
};

export default App;
