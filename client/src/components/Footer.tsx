import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = (): React.ReactElement => {

  return (
    <div id='footer-wrap'>
      <div className='footerBtn'>
        <Link to='/'>
          <img src="https://i.ibb.co/d4qH65N/crushers-icon-1-doughnut.png" alt="crushers-icon-1-doughnut" className="testy" />
        </Link>
        <Link to='/graphs'>
          <img src="https://i.ibb.co/3Cf1jPf/crushers-icon-2-graph.png" alt="crushers-icon-2-graph" className="testy"/>
        </Link>
        <Link to='/shower'>
          <img src="https://i.ibb.co/k1Y2RT8/crushers-icon-3-timer.png" alt="crushers-icon-3-timer" className="testy"/>
        </Link>
        <Link to='/leaderboard'>
          <img src="https://i.ibb.co/pwBVWnC/crushers-icon-4-leaderboard.png" alt="crushers-icon-4-leaderboard" className="testy"/>
        </Link>
        <Link to='/notifications'>
          <img src="https://i.ibb.co/C1hNtfb/crushers-icon-5-updates.png" alt="crushers-icon-5-updates" className="testy"/>
        </Link>
        <Link to='/profile'>
          <img src="https://i.ibb.co/WPnw9Wr/crushers-icon-6-profile.png" alt="crushers-icon-6-profile" className="testy"/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
