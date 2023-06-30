const get_nano_seconds = (difference) => difference % 1000;
const get_seconds = (difference) => Math.floor((difference / 1000) % 60);
const get_minutes = (difference) => Math.floor((difference / (1000 * 60)) % 60);
const get_hours = (difference) =>
  Math.floor((difference / (1000 * 60 * 60)) % 24);
const get_days = (difference) => Math.floor(difference / (1000 * 60 * 60 * 24));
const end = new Date(
  "Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)"
);
const start = new Date(
  "Wed Jun 28 2023 13:55:00 GMT+0600 (Bangladesh Standard Time)"
);

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

  document.getElementById("timer").innerHTML = `
    <div style="display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; gap:16px;">
      <p>Nano Seconds: <strong>${get_nano_seconds(mainDate)}</strong></p>
      <p>Seconds: <strong>${get_seconds(mainDate)}</strong></p>
      <p>Minutes: <strong>${get_minutes(mainDate)}</strong></p>
      <p>Hours: <strong>${get_hours(mainDate)}</strong></p>
      <p>Days: <strong>${get_days(mainDate)}</strong></p>
    </div>
  `;
}

const intervalId = setInterval(() => renderCountdownTimer(), 1000);
