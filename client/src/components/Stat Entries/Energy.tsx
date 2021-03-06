import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Energy ({ac, wash, dish, screen, func}){
  // const [dishECount, setDishECount] = useState(0);
  // const [washECount, setWashECount] = useState(0);
  // const [acHeatCount, setAcHeatCount] = useState(0);
  // const [screenCount, setScreenCount] = useState(0);
  const dishECount = dish;
  const washECount = wash;
  const acHeatCount = ac;
  const screenCount = screen;
  const displayDishCounter = dishECount >= 0;
  const displayDineCounter = washECount >= 0;
  const displayAcHeatCounter = acHeatCount >= 0;
  const displayScreenCounter = screenCount >= 0;
  const handleDishEIncrement = func[0]

      const handleDishEDecrement = func[1]
      const handleScreenIncrement = func[4]
          const handleScreenDecrement = func[5]
      const handleACIncrement = func[6]

          const handleACDecrement = func[7]
      const handleWashEIncrement = func[2]

          const handleWashEDecrement = func[3]

  return (
    <div>
<h2>How many times did you run your dishwasher this week?</h2>
      <h3>{dishECount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDishCounter && <Button onClick={handleDishEDecrement}>-</Button>}
        <Button disabled></Button>
        <Button onClick={handleDishEIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many times did you wash clothes this week?</h2>
      <h3>{washECount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDineCounter && <Button onClick={handleWashEDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleWashEIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many hours did you use AC/Heater this week?</h2>
      <h3>{acHeatCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayAcHeatCounter && <Button onClick={handleACDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleACIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many hours of non work related screen time this week?</h2>
      <h3>{screenCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayScreenCounter && <Button onClick={handleScreenDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleScreenIncrement}>+</Button>
      </ButtonGroup>
      <h1></h1>


    </div>
  )
}