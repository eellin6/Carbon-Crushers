import * as React from 'react';

const StatsBreakdown = (): React.ReactElement => {
  return (
    <div>
      <h1>Ever wonder how your points are calculated? Check it out!</h1>
      <h2>Energy</h2>
      <h4>You will recieve an AC/Heater allowance of 10 hours per week, earn 3 points for each hour under and lose 3 ponts for each hour over</h4>
      <h4>You will recieve an allowance of 3 dishwasher uses per week and 4 washing machine uses per week. Earn 5 point for each use under this allowance and lose 5 points for each use over.</h4>
      <h4>You have 20 non-work hours of screen time per week earn 2 point for every hour under and lose 2 points for every hour over.</h4>
      <h2>Water</h2>
      <h4>You will recieve an allowance of 3 dishwasher uses per week and 4 washing machine uses per week. Earn 5 point for each use inder this allowance and lose 5 points for each use over</h4>
      <h2>Recycling</h2>
      <h4>You will earn 2 points for every bottle recycled</h4>
      <h2>Meat and Dining</h2>
      <h4>You're given an allowance of 4 meal with meat a week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over.</h4>
      <h4>You're given an allowance of 4 times to dine out per week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over.</h4>
      <h2>Mileage</h2>
      <h4>ou're given an allowance of 200 miles per week. Earn 2 points for every mile under that allowance and lose 2 point for every mile over.</h4>

    </div>
  );
};

export default StatsBreakdown;
