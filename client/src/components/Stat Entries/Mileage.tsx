import * as React from 'react';
import { Component } from 'react';
import { Slider } from '@material-ui/core';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Mileage (){
  const [miles, setMiles] = useState(1);

  const handleChange = (event, newValue) => {
    setMiles(newValue);

  };
  const submit = () => {
console.info(miles)
setMiles(0)
  }
  return (
    <div>
      <h2>How many miles did you drive this week?</h2>
      <div> <Slider  className="slider"
                    max={ 500 }
                    step={ 25 }
                    value={miles}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  /></div>
                  <button onClick={submit}>submit</button>

    </div>
  )
}