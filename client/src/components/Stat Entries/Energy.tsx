import * as React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Slider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const Energy = ({wash, dish, screen, func, degrees, handleThermostat}): React.ReactElement => {
  const dishECount = dish;
  const washECount = wash;
  const screenCount = screen;
  const displayDishCounter = dishECount >= 0;
  const displayDineCounter = washECount >= 0;
  const displayScreenCounter = screenCount >= 0;
  const handleDishEIncrement = func[0];
  const handleDishEDecrement = func[1];
  const handleScreenIncrement = func[4];
  const handleScreenDecrement = func[5];
  const handleWashEIncrement = func[2];
  const handleWashEDecrement = func[3];

  const useStyles = makeStyles((theme) => ({
    root: {
      'width': '100%',
      // display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffc955',
      },
    }
  });

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <h2>On average, what did you set your thermostat to this week?</h2>
        <p>If you didn't use your A/C or heater, leave the slider all the way to the left. Great job! You earned 5 bonus points.</p>
        <div>
          <Slider className="slider"
            min={ 60 }
            max={ 85 }
            step={ 1 }
            value={degrees}
            onChange={handleThermostat}
            valueLabelDisplay="auto"
          />
        </div>
        <h2>How many times did you run your dishwasher this week?</h2>
        <h3>{dishECount}</h3>
        <div className='stats-btns-container'>
          <div className='stats-btns'>
            <ButtonGroup size="small" aria-label="small button group">
              {displayDishCounter && <Button onClick={handleDishEDecrement}>-</Button>}
              <Button disabled></Button>
              <Button onClick={handleDishEIncrement}>+</Button>
            </ButtonGroup>
          </div>
        </div>
        <h2>How many times did you wash clothes this week?</h2>
        <h3>{washECount}</h3>
        <div className='stats-btns-container'>
          <div className='stats-btns'>
            <ButtonGroup size="small" aria-label="small outlined button group">
              {displayDineCounter && <Button onClick={handleWashEDecrement}>-</Button>}
              <Button disabled></Button>
              <Button onClick={handleWashEIncrement}>+</Button>
            </ButtonGroup>
          </div>
        </div>
        <h2>How many hours of non work related screen time this week?</h2>
        <h3>{screenCount}</h3>
        <div className='stats-btns-container'>
          <div className='stats-btns'>
            <ButtonGroup size="small" aria-label="small outlined button group">
              {displayScreenCounter && <Button onClick={handleScreenDecrement}>-</Button>}
              <Button disabled></Button>
              <Button onClick={handleScreenIncrement}>+</Button>
            </ButtonGroup>
          </div>
        </div>
        <h4>Dishwashers use and average of 1800 watts per hour while washing machines use an average of 5000.  </h4>
        <h4>Between tv's computers and phones, screens average 106 watts per hour.</h4>

      </div>

    </div>
  );
};

export default Energy;
