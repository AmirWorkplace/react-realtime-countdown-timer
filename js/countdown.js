const CountdownTimer = (
  {
    daysElement,
    hoursElement,
    minutesElement,
    secondsElement,
    milliSecondsElement,
    messageElement,
  },
  starting,
  ending,
  intervalDuration = 1000,
  duration
) => {
  let intervalId,
    status = true;

  initiallyTimerElementStatus();

  if (duration) {
    starting = new Date();
    ending = new Date(starting.getTime() + duration);
  }

  const getNanoSeconds = (difference) => difference % 1000;
  const getSeconds = (difference) => Math.floor((difference / 1000) % 60);
  const getMinutes = (difference) =>
    Math.floor((difference / (1000 * 60)) % 60);
  const getHours = (difference) =>
    Math.floor((difference / (1000 * 60 * 60)) % 24);
  const getDays = (difference) =>
    Math.floor(difference / (1000 * 60 * 60 * 24));

  const renderCountdownTimer = () => {
    const now = new Date();
    const start = new Date(starting);
    const end = new Date(ending);
    let mainDate = end - now;

    if (now < start) {
      messageElement &&
        (messageElement.textContent = `Timer will start on: ${starting}`);
      return;
    }

    if (mainDate <= 0) {
      clearInterval(intervalId);
      status = !status;

      if (duration) {
        messageElement &&
          (messageElement.textContent = `Timer has ended After ${duration} MilliSeconds!`);
        clearInterval(intervalId);
        return;
      }
      messageElement &&
        (messageElement.textContent = `Timer has ended at: ${ending}`);
      clearInterval(intervalId);
      return;
    }

    milliSecondsElement &&
      (milliSecondsElement.textContent = getNanoSeconds(mainDate));
    secondsElement.textContent = getSeconds(mainDate);
    minutesElement.textContent = getMinutes(mainDate);
    hoursElement.textContent = getHours(mainDate);
    daysElement.textContent = getDays(mainDate);
  };

  intervalId = setInterval(renderCountdownTimer, intervalDuration);

  function initiallyTimerElementStatus() {
    milliSecondsElement && (milliSecondsElement.textContent = 0);
    secondsElement.textContent = 0;
    minutesElement.textContent = 0;
    hoursElement.textContent = 0;
    daysElement.textContent = 0;
    messageElement && (messageElement.textContent = 'Timer is Running at: ');
  }

  return null;
};
