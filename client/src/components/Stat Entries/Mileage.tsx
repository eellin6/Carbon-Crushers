import * as React from 'react';
import { Component } from 'react';
import { Slider } from '@material-ui/core';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Mileage ({miles, func}){


const handleChange = func;




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


    </div>
  )
}