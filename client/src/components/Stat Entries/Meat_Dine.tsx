import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Meat_Dine (){
  const [count, setCount] = useState(1);

  const displayCounter = this.state.counter > 0;
  return (

    <div>
      <h1>Log your meat consumption and Dining out for the week</h1>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{count}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>

    </div>
  )
}