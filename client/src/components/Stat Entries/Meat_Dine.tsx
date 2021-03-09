import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Meat_Dine ({meat, dine, func}) {

  const meatCount = meat;
  const dineCount = dine;
  const displayMeatCounter = meatCount >= 0;
  const displayDineCounter = dineCount >= 0;
  const handleMeatIncrement = func[1];
  const handleMeatDecrement = func[0];
  const handleDineDecrement = func[3];
  const handleDineIncrement = func[2];

  return (

    <div>
      <h2>Log your meat consumption for the week</h2>
      <h3>{meatCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayMeatCounter && <Button onClick={handleMeatDecrement}>-</Button>}
        <Button disabled></Button>
        <Button onClick={handleMeatIncrement}>+</Button>
      </ButtonGroup>
      <h2>Log your dining out for the week</h2>
      <h3>{dineCount}</h3>
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayDineCounter && <Button onClick={handleDineDecrement}>-</Button>}
        <Button disabled></Button>
        <Button onClick={handleDineIncrement}>+</Button>
      </ButtonGroup>
      <h4>14.8 pounds of C02 is produced per pound of meat. The average American eats 3.7 pounds of meat per week, can you beat this? You're given an allowance of 4 meal with meat a week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over.</h4>
      <h4>1697 lbs C02 per household per year is generated from dining out. You're given an allowance of 4 times to dine out per week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over. </h4>



    </div>
  );
}
