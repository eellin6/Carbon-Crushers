import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Slider } from '@material-ui/core';
export default function Recycling (){
  const [bottles, setBottles] = useState(1);

  const handleChange = (event, newValue) => {
    setBottles(newValue);

  };
  const submit = () => {
console.info(bottles)
setBottles(0)
  }
  return (
    <div>
<h1>How many bottles did you recycle this week?</h1>
<div> <Slider  className="slider"
                    max={ 100 }
                    step={ 10 }
                    value={bottles}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  /></div>
                  <button onClick={submit}>submit</button>
    </div>
  )
}