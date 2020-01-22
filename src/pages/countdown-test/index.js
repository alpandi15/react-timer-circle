import React, { useState, useEffect } from 'react'

const Index = () => {
  const [expStatus, setExpStatus] = useState(false)
  const [expired, setExpired] = useState(new Date("Jan 22, 2020 16:57:00").getTime())
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)

  useEffect(() => {
    var timer = setInterval(function() {
      let now = new Date().getTime(); 
      let t = expired - now;
      if (t >= 0) {
          let days = Math.floor(t / (1000 * 60 * 60 * 24));
          let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          setMins(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)))
          setSecs(Math.floor((t % (1000 * 60)) / 1000))
      }
      else {
        clearInterval(timer)
        setExpStatus(true)
      }
  
      console.log(t)
  
    }, 1000);
  }, [expired])

  const extraTime = (sec) => {
    setExpStatus(false)
    setExpired(Date.now() + (sec * 1000))
  }

  return (
    <>
      {!expStatus ? 
        (
          <div>
            {mins}:{secs}
          </div>
        )
        : (
          <div>
            <button onClick={() => extraTime(30)}>
            Resend Code
            </button>
          </div>
        )
      }
    </>
  )
}

export default Index
