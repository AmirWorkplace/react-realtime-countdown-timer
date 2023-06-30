# react-realtime-countdown-timer

[![NPM Version](https://img.shields.io/npm/v/react-realtime-countdown-timer.svg)](https://www.npmjs.com/package/your-package-name)
[![License](https://img.shields.io/npm/l/react-realtime-countdown-timer.svg)](https://github.com/AmirWorkplace/react-realtime-countdown-timer)

A brief description of your package and its key features.

## Installation

You can install this package via npm. Run the following command:

- Using Node Package Manager (NPM)

```shell
npm install react-realtime-countdown-timer
```

```
import CountdownTimer from "react-realtime-countdown-timer"

export default function App(){
const { days, hours, minutes, seconds, nanoSeconds, status, message } =
  CountdownTimer(
    /** @param Staring time Parameter--- */
    "Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)",

    /** @param Ending time Parameter--- */
    "Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)",
    1000
  );

  return (
    <div style={{ display:flex, alignItems:'center', justifyContent:'center', width:'100%', height:'100vh', fontSize:20, padding:8 }}>
    <p>{message}</p><br/>
    <p>Days <strong style={{padding:'0px 8px'}}>{days}</strong></p>
    <p>Hours <strong style={{padding:'0px 8px'}}>{hours}</strong></p>
    <p>Minutes <strong style={{padding:'0px 8px'}}>{minutes}</strong></p>
    <p>Seconds <strong style={{padding:'0px 8px'}}>{seconds}</strong></p>
    </div>
  );
}
```

## Simple working policy,

- `CountdownTimer()` the function receive three parameters of `starting` count date, `ending` count date and `interval` time in milliseconds. and return the updated value of `{ days, hours, minutes, seconds, nanoSeconds, status, message }` after every third parameter's inter validation time.
