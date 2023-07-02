import { useEffect, useState } from "react";

const CountdownTimer = (starting, ending) => {
  const [nanoSeconds, setNanoSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [message, setMessage] = useState("Timer is Running at: ");
  const [status, setStatus] = useState(true);

  const getNanoSeconds = (difference) => difference % 1000;
  const getSeconds = (difference) => Math.floor((difference / 1000) % 60);
  const getMinutes = (difference) =>
    Math.floor((difference / (1000 * 60)) % 60);
  const getHours = (difference) =>
    Math.floor((difference / (1000 * 60 * 60)) % 24);
  const getDays = (difference) =>
    Math.floor(difference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const renderCountdownTimer = () => {
      const now = new Date();
      const start = new Date(starting);
      const end = new Date(ending);
      let mainDate = end - now;

      if (now < start) {
        setMessage(`Timer will start on: ${starting}`);
        return;
      }

      if (mainDate <= 0) {
        clearInterval(intervalId);
        setStatus(!status);
        setMessage(`Timer has ended at: ${ending}`);
        return;
      }

      setNanoSeconds(getNanoSeconds(mainDate));
      setSeconds(getSeconds(mainDate));
      setMinutes(getMinutes(mainDate));
      setHours(getHours(mainDate));
      setDays(getDays(mainDate));
    };

    const intervalId = setInterval(renderCountdownTimer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { days, hours, minutes, seconds, nanoSeconds, status, message };
};

export default CountdownTimer;
