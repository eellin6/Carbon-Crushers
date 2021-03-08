import * as React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

const Shower = () => {
  const [timer, setTimer] = useState(0);
  const [showerTime, setShowerTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const countRef = useRef(null);

  const formatTime = (timer) => {
    const getSeconds: string = `0${(timer % 60)}`.slice(-2);
    const minutes: number = Math.floor(timer / 60);
    const getMinutes: string = `0${minutes % 60}`.slice(-2);

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

  const handleSubmit = () => {
    const totalTime = timer;
    axios.post('/shower', { time: totalTime })
      .then(data => data)
      .catch(err =>  console.warn(err));
    setShowerTime(totalTime);
    setTimer(0);
    setIsSubmitted(true);
  }

  return (
    <div className='page-wrap'>
      <h1>Shower Timer</h1>
          <div className='timer'>
            {formatTime(timer)}
          </div>
          <div className='timer-wrap'>
            <div className='buttons'>
              {
                !isActive && !isPaused ?
                  <button className='btn timer-btn' onClick={handleStart}>Start</button>
                  : (
                    isPaused ? <button className='btn timer-btn' onClick={handlePause}>Pause</button> :
                      <button className='btn timer-btn' onClick={handleResume}>Resume</button>
                  )
              }
              <button className='btn timer-btn' onClick={handleReset} disabled={!isActive}>Reset</button>
            </div>
          </div>
          <button className='btn' onClick={handleSubmit}>Submit</button>

          <div>
            <div className='submit-status'>
          {
            !isSubmitted ?
              <h4>The average shower lasts 8 minutes and uses 17.2 gallons of water. Can you beat it?</h4>
              : (
                  <h4><i>Time of {formatTime(showerTime)} submitted to your water score</i></h4>
              )
          }
            </div>
          </div>
    </div>
  );
}

export default Shower;