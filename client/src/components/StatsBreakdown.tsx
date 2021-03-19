import * as React from 'react';

const StatsBreakdown = (): React.ReactElement => {
  return (
    <div className='page-wrap'>
      <h1>Ever wonder how your points are calculated? Check it out!</h1>
      <h2>Energy</h2>
      <h4>Your A/C and heater score is calculated by taking the difference of your thermostat temperature and the ideal temperature and multiplying by 3. If you don't use your A/C or heater at all during that week, you'll earn 5 bonus points.</h4>
      <h4>You will receive an allowance of 3 dishwasher uses per week and 4 washing machine uses per week. Earn 5 point for each use under this allowance and lose 5 points for each use over.</h4>
      <h4>You have 20 non-work hours of screen time per week earn 2 point for every hour under and lose 2 points for every hour over.</h4>
      <h2>Water</h2>
      <h4>You will receive an allowance of 3 dishwasher uses per week and 4 washing machine uses per week. Earn 5 point for each use inder this allowance and lose 5 points for each use over.</h4>
      <h4>Your water score also includes your average shower time. Your shower score is calculated by proximity to the average 8-minute shower. You'll gain 2 points for every 30 seconds under 8 minutes or lose 2 points for every 30 seconds over the 8-minute average.</h4>
      <h2>Recycling</h2>
      <h4>You will earn 1 point for every bottle recycled. Upload a picture and your points will increase by 50% per bottle.</h4>
      <h2>Meat and Dining</h2>
      <h4>You're given an allowance of 4 meal with meat a week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over.</h4>
      <h4>You're given an allowance of 4 times to dine out per week. Earn 2 points for every meal under that allowance and lose 2 point for every meal over.</h4>
      <h2>Mileage</h2>
      <h4>You're given an allowance of 200 miles per week. Earn 2 points for every mile under that allowance and lose 2 point for every mile over.</h4>
    </div>
  );
};

export default StatsBreakdown;
