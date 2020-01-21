import React from 'react'
import CountDown from 'react-countdown'
import { getTimeDiff } from '../../utils/time'

import Timers from './timer'

const Completionist = () => <span>Resend Code!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{minutes}:{seconds}</span>;
  }
}

const Timer = () => {
  const create = new Date('2020-01-20 11:08:00').getTime()
  const expired = new Date('2020-01-20 11:30:20').getTime()
  let expiredTime = 0
  if (Date.now() >= create && Date.now() < expired) {
    expiredTime = (getTimeDiff(create, expired) * 1000)
  }
  console.log (expiredTime)
  return (
    <div>
      Timer
      <CountDown
        date={Date.now() + expiredTime}
      />
      <Timers timeTillDate="2020-01-20 10:42:00" timeFormat="YYYY-MM-DD H:mm:ss" />
    </div>
  )
}

export default Timer
