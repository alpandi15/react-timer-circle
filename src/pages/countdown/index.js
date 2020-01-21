import React, { useState } from 'react'
import CountDown, { zeroPad } from 'react-countdown'
import { getTimeDiff } from '../../utils/time'

import Timers from './timer'


const Timer = () => {
  const [timeNow, setTimeNow] = useState(Date.now())
  // const create = new Date('2020-01-20 11:52:00').getTime()
  const expired = new Date('2020-01-21 16:46:20').getTime()
  let expiredTime = 0
  if (timeNow < expired) {
    expiredTime = (getTimeDiff(timeNow, expired) * 1000)
  }
  console.log(expiredTime)
  const Completionist = () => {
    return (
      <button onClick={() => setTimeNow(Date.now() + (10 * 1000))}>Resend Code!</button>
    )
  };
  
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // const setDigit = (val) => {
    //   if (val.toString().length <= 1) {
    //     return "0" + val.toString();
    //   }
    //   return val.toString();
    // }

    if (completed) {
      return <Completionist />;
    } else {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  }

  return (
    <div>
      <CountDown
        date={timeNow + expiredTime}
        renderer={renderer}
      />
      {/* <Timers timeTillDate="2020-01-20 10:42:00" timeFormat="YYYY-MM-DD H:mm:ss" /> */}
    </div>
  )
}

export default Timer
