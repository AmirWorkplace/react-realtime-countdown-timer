import React from 'react';
import CountdownTimer from './CountdownTImer';
// import CountdownTimer from 'react-realtime-countdown-timer';

function Timer() {
  const { days, hours, minutes, seconds, nanoSeconds, status, message } =
    CountdownTimer(
      /** @param Staring time Parameter--- */
      'Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)',
      /** @param Ending time Parameter--- */
      'Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)',
      /** @param Time inter validation Duration--- */
      100,
      /** @param if starting & ending time is not need for you then you can use duration --- */
      1000 * 60 * 0.1
    );

  return (
    <div className="bg-slate-900 text-slate-100">
      <p className="text-5xl text-red-400">
        <span className="text-slate-100 pr-2">Timer Status: </span>
        {status ? 'True' : 'False'}
      </p>
      <div className="flex items-center justify-center gap-5 w-full min-h-screen text-xl font-light">
        <p>{message}</p>
        <br />
        <p>
          Days:
          <span className="ml-1 text-xl font-bold text-red-400">{days}</span>
        </p>
        <p>
          Hours:
          <span className="ml-1 text-xl font-bold text-red-400">{hours}</span>
        </p>
        <p>
          Minutes:
          <span className="ml-1 text-xl font-bold text-red-400">{minutes}</span>
        </p>
        <p>
          Seconds:
          <span className="ml-1 text-xl font-bold text-red-400">{seconds}</span>
        </p>
        <p className="flex">
          Milliseconds:
          <span className="ml-1 text-xl font-bold text-red-400 w-10 block">
            {nanoSeconds}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Timer;
