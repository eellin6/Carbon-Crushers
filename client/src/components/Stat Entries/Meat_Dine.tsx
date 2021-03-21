import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Meat_Dine = ({meat, dine, func}): React.ReactElement => {

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
      <div className='stats-btns-meat-container'>
        <div className='stats-btns'>
          <ButtonGroup size="small" aria-label="small outlined button group">
            {displayMeatCounter && <Button onClick={handleMeatDecrement}>-</Button>}
            <Button disabled></Button>
            <Button onClick={handleMeatIncrement}>+</Button>
          </ButtonGroup>
        </div>
      </div>
      <h2>Log your dining out for the week</h2>
      <h3>{dineCount}</h3>
      <div className='stats-btns-meat-container'>
        <div className='stats-btns'>
          <ButtonGroup size="small" aria-label="small outlined button group">
            {displayDineCounter && <Button onClick={handleDineDecrement}>-</Button>}
            <Button disabled></Button>
            <Button onClick={handleDineIncrement}>+</Button>
          </ButtonGroup>
        </div>
      </div>
      <h4>14.8 pounds of C02 is produced per pound of meat. The average American eats 3.7 pounds of meat per week, can you beat this? </h4>
      <h4>1697 lbs C02 per household per year is generated from dining out. </h4>



    </div>
  );
};

export default Meat_Dine;
