import * as React from 'react';
import { useState, useRef } from 'react';

const Shower = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const formatTime = (timer) => {
    const getSeconds: string = `0${(timer % 60)}`.slice(-2)
    const minutes: number = Math.floor(timer / 60);
    const getMinutes: string = `0${minutes % 60}`.slice(-2)
    // const getHours: string = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000);
  }

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  }

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000);
  }

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  }

  return (
    <div className='page-wrap'>
      <h1>Shower Timer</h1>
        <div className='timer'>
          <p>{formatTime(timer)}</p>
          <div className='buttons'>
            {
              !isActive && !isPaused ?
                <button className='btn' onClick={handleStart}>Start</button>
                : (
                  isPaused ? <button className='btn' onClick={handlePause}>Pause</button> :
                    <button className='btn' onClick={handleResume}>Resume</button>
                )
            }
            <button className='btn' onClick={handleReset} disabled={!isActive}>Reset</button>
          </div>
        </div>
    </div>
  );
}

export default Shower;