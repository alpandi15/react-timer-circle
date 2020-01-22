import React from 'react';
import { Link } from 'react-router-dom';

export default () =>{
  const [difference, setDifference] = React.useState(0);
  const [intervalID, setIntervalID] = React.useState(null)
  const [start, setStart] = React.useState(true)

  const [stopDate] = React.useState(Math.trunc(new Date('2020-01-21 15:24:00').getTime() / 1000))
  
  let timeNow = Math.trunc(new Date().getTime() / 1000);

  const setDigit = (val) => {
    if (val.toString().length <= 1) {
      return "0" + val.toString();
    }
    return val.toString();
  }
  
  let i = 1;
  const IntervalCount = () => {
  }
  React.useEffect( () => {
    let timer = null
    if (difference > 0) {
      timer = setTimeout(()=> {
        var tmpStartDate = timeNow + i;
        setDifference(stopDate - tmpStartDate);
        i++;
      }, 1000);
    }
    if (!start || difference < 0){
      clearInterval(timer)
    }
    // console.log('Diff ', difference)
    // console.log('Interval ', interval)

    // return () => {
    //   if (difference <= 0) {
    //     console.log('Berhenti ', difference)
    //     clearTimeout(interval)
    //   }
    // }

  },[difference, i, start, stopDate, timeNow])


  return(
    <>
      <div style={{margin: '2rem', fontSize: '3rem'}}>
        {setDigit(Math.trunc(difference / 60 / 60 / 24))} : {setDigit(Math.trunc(difference / 60 / 60) % 24)} : {setDigit(Math.trunc(difference / 60) % 60)} : {setDigit(Math.trunc(difference) % 60)}
      </div>
      { difference <= 0 ? 'Resend Code' : 'Waiting..'}
      <div>
        <button onClick={() => setStart(!start)}>
        {start ? 'Stop' : 'Start'}
        </button>
      </div>
      <ul>
        <li><Link to="/countdown">Countdown</Link></li>
        <li><Link to="/countdown-test">Countdown Test</Link></li>
      </ul>

    </>
  )
}