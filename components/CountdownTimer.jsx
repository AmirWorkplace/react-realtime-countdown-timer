/* import React, { useEffect, useState } from "react";

export const CountdownTimer = (start, end) => {
  console.clear();
  console.log(start, "\n", end);

  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  // const [intervalId, setIntervalId] = useState(null);

  const get_nano_seconds = (difference) => difference % 1000;
  const get_seconds = (difference) => Math.floor((difference / 1000) % 60);
  const get_minutes = (difference) =>
    Math.floor((difference / (1000 * 60)) % 60);
  const get_hours = (difference) =>
    Math.floor((difference / (1000 * 60 * 60)) % 24);
  const get_days = (difference) =>
    Math.floor(difference / (1000 * 60 * 60 * 24));
  /* const end = new Date(
    "Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)"
  );
  const start = new Date(
    "Wed Jun 28 2023 13:55:00 GMT+0600 (Bangladesh Standard Time)"
  ); * /
  useEffect(() => {
    function renderCountdownTimer() {
      const now = new Date();
      let mainDate = end - now;

      if (now < start) {
        document.getElementById(
          "timer"
        ).innerHTML = `Timer will start on: <strong>${start}</strong>`;
        return;
      }

      if (mainDate <= 0) {
        document.getElementById(
          "timer"
        ).innerHTML = `Timer will ends at: <strong>${end}</strong>`;
        clearInterval(intervalId);
        return;
      }

      setNanoSeconds(get_nano_seconds(mainDate));
      setSeconds(get_seconds(mainDate));
      setMinutes(get_minutes(mainDate));
      setHours(get_hours(mainDate));
      setDays(get_days(mainDate));
      // console.log(get_minutes(mainDate));
    }

    // setIntervalId(setInterval(() => renderCountdownTimer(), 1000));
    const intervalId = setInterval(() => renderCountdownTimer(), 1000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(nanoSeconds, seconds, minutes, hours, days);
  return ["AMIR ALI", { nanoSeconds, seconds, minutes, hours, days }];
};

export default CountdownTimer;
 */

import React, { useEffect, useState } from "react";

const CountdownTimer = ({ start, end }) => {
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const getNanoSeconds = (difference) => difference % 1000;
  const getSeconds = (difference) => Math.floor((difference / 1000) % 60);
  const getMinutes = (difference) =>
    Math.floor((difference / (1000 * 60)) % 60);
  const getHours = (difference) =>
    Math.floor((difference / (1000 * 60 * 60)) % 24);
  const getDays = (difference) =>
    Math.floor(difference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    function renderCountdownTimer() {
      const now = new Date();
      let mainDate = end - now;

      if (now < start) {
        return;
      }

      if (mainDate <= 0) {
        clearInterval(intervalId);
        return;
      }

      setNanoSeconds(getNanoSeconds(mainDate));
      setSeconds(getSeconds(mainDate));
      setMinutes(getMinutes(mainDate));
      setHours(getHours(mainDate));
      setDays(getDays(mainDate));
    }

    const interval = setInterval(renderCountdownTimer, 1000);
    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(nanoSeconds, seconds, minutes, hours, days);

  return [
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
  ];
};

export default CountdownTimer;
