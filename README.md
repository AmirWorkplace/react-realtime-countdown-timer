# react-realtime-countdown-timer

### React RealTime CountDown Timer

[![NPM Version](https://img.shields.io/npm/v/react-realtime-countdown-timer.svg)](https://www.npmjs.com/package/react-realtime-countdown-timer)
[![License](https://img.shields.io/npm/l/react-realtime-countdown-timer.svg)](https://github.com/AmirWorkplace/react-realtime-countdown-timer)

A brief description of your package and its key features.

## Installation

You can install this package via npm. Run the following command:

- Using Node Package Manager (NPM)

```shell
npm install react-realtime-countdown-timer
```

- Using Yarn

```shell
yarn add react-realtime-countdown-timer
```

<br/>

## How to use (using realtime `starting` & `ending` Date)

```
import CountdownTimer from "react-realtime-countdown-timer"

export default function App(){

  const { days, hours, minutes, seconds, nanoSeconds, status, message } =
    CountdownTimer(
      /** @param Staring time Parameter--- */
      "Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)",

      /** @param Ending time Parameter--- */
      "Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)",

      /** @param Time inter validation Duration--- */
      1000
    );

  const styles = {
    container: {
      padding:8
      fontSize:20,
      width:'100%',
      display:flex,
      height:'100vh',
      alignItems:'center',
      justifyContent:'center',
    }
  }

  return (
    <div style={styles.container}>
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

<br/> <br/>

## How to use (Using `ms in 4th-param` Duration)

- if starting & ending time is not need for you then you can use duration in milliseconds.

- ### [Example](#) :

```
const { days, hours, minutes, seconds, nanoSeconds, status, message } =
  CountdownTimer(null, null, 1000, 1000 * 60 * 10);
```

- #### or

```
const { days, hours, minutes, seconds, nanoSeconds, status, message } =
  CountdownTimer(
    /** @param Staring time Parameter--- */
    'Wed Jun 28 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)',

    /** @param Ending time Parameter--- */
    'Wed Jul 30 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)',

    /** @param Time inter validation Duration--- */
    100,

    /** @param if starting & ending time is not need for you then you can use duration --- */
    600000
  );

- for 10 minutes.

```

- [N:B:](#) if you are using a realtime timer to use starting and ending date and count down after one seconds donn't need to set the `CountdownTimer()` function's three an four parameters.
