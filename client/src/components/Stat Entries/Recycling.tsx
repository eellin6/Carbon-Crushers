import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Slider } from '@material-ui/core';
export default function Recycling ({miles, func}){
 const bottles = miles;
 const bottleChange = func;

  return (
    <div>
<h2>How many bottles did you recycle this week?</h2>
<div> <Slider  className="slider"
                    max={ 100 }
                    step={ 10 }
                    value={bottles}
                    onChange={bottleChange}
                    valueLabelDisplay="auto"
                  /></div>

    </div>
  )
}