import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Water ({wash, dish, func}){
 const dishCount = dish;
 const washCount = wash
  const displayDishCounter = dishCount >= 0;
  const displayDineCounter = washCount >= 0;
   const handleDishIncrement = func[1]
  const handleDishDecrement = func[0]
  const handleWashIncrement = func[2]
 const handleWashDecrement = func[3]

  return (
    <div>
      <h2>How many times did you run your dishwasher this week?</h2>
      <h3>{dishCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDishCounter && <Button onClick={handleDishDecrement}>-</Button>}
        <Button disabled></Button>
        <Button onClick={handleDishIncrement}>+</Button>
      </ButtonGroup>
      <h2>How many times did you wash clothes this week?</h2>
      <h3>{washCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDineCounter && <Button onClick={handleWashDecrement}>-</Button>}
         <Button disabled></Button>
        <Button onClick={handleWashIncrement}>+</Button>
      </ButtonGroup>



    </div>
  )
}