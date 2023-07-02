import React from 'react';
import CountdownTimer from './components/CountdownTImer';
import './index.css';

function App() {
  const { days, hours, minutes, seconds, nanoSeconds, status, message } =
    CountdownTimer(
      /** @param Staring time Parameter--- */
      'Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)',
      /** @param Ending time Parameter--- */
      'Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)',
      /** @param Time inter validation Duration--- */
      1000
    );

  return (
    <div className="bg-slate-900 text-slate-100">
      <p className="text-5xl text-red-400">{status ? 'True' : 'False'}</p>
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
        <p>
          Milliseconds:
          <span className="ml-1 text-xl font-bold text-red-400">
            {nanoSeconds}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
