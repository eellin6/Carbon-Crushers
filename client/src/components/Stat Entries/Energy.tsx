import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Energy (){
  const [dishECount, setDishECount] = useState(0);
  const [washECount, setWashECount] = useState(0);
  const [acHeatCount, setAcHeatCount] = useState(0);
  const [screenCount, setScreenCount] = useState(0);
  const displayDishCounter = dishECount >= 0;
  const displayDineCounter = washECount >= 0;
  const displayAcHeatCounter = acHeatCount >= 0;
  const displayScreenCounter = screenCount >= 0;
  const handleDishIncrement = () => {
    setDishECount(dishECount + 1)
      };

      const handleDishDecrement = () => {
        setDishECount(dishECount - 1)
      };
      const handleScreenIncrement = () => {
        setScreenCount(screenCount + 1)
          };

          const handleScreenDecrement = () => {
            setScreenCount(screenCount - 1)
          };
      const handleACIncrement = () => {
        setAcHeatCount(acHeatCount + 1)
          };

          const handleACDecrement = () => {
            setAcHeatCount(acHeatCount - 1)
          };
      const handleWashIncrement = () => {
        setWashECount(washECount + 1)
          };

          const handleWashDecrement = () => {
            setWashECount(washECount - 1)
          };
          const submit = () => {

            setDishECount(0)
            setWashECount(0)
            setAcHeatCount(0)
            setScreenCount(0)
              }
  return (
    <div>
<h2>How many times did you run your dishwasher this week?</h2>
      <h3>{dishECount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDishCounter && <Button onClick={handleDishDecrement}>-</Button>}
        <Button disabled></Button>
        <Button onClick={handleDishIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many times did you wash clothes this week?</h2>
      <h3>{washECount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDineCounter && <Button onClick={handleWashDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleWashIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many hours did you use AC/Heater this week?</h2>
      <h3>{acHeatCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayAcHeatCounter && <Button onClick={handleACDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleACIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many hours of screen time this week?</h2>
      <h3>{screenCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayScreenCounter && <Button onClick={handleScreenDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleScreenIncrement}>+</Button>
      </ButtonGroup>
      <h1></h1>
      <button onClick={submit}>submit</button>

    </div>
  )
}