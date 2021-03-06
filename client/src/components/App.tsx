import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import HomePage from './HomePage';
import Profile from './Profile';
import Stats from './Stats'

const App = () => {
  const [currentStatus, setCurrentStatus] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState();

  // check if user is logged in
  const getLoginStatus = () => {
    axios.get('/isLoggedin')
      .then(({ data }: any) => setCurrentStatus(data))
      .catch((err: string) => console.warn(err));
  };
  getLoginStatus();

  return (
    <div id="wrapper">
      {
        !currentStatus
        ? <div>
            <img id='logo-welcome' alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
            <a href='/auth/google' className='google-button'>
              <GoogleButton type='light' />
            </a>
          </div>
        :
        <div>
          <HomePage />
          <button className='btn'
            onClick={() => axios.delete('/logout')
              .then(({ data }) => setLogoutStatus(data))
              .catch((err) => console.warn(err))} ><i>logout</i>
          </button>
          <Stats/>
          {/* <Profile/> */}
        </div>
      }


      <div className='footerBtn'>
      <img src="https://i.ibb.co/d4qH65N/crushers-icon-1-doughnut.png" alt="crushers-icon-1-doughnut" className="testy" />
      <img src="https://i.ibb.co/3Cf1jPf/crushers-icon-2-graph.png" alt="crushers-icon-2-graph" className="testy"/>
      <img src="https://i.ibb.co/k1Y2RT8/crushers-icon-3-timer.png" alt="crushers-icon-3-timer" className="testy"/>
      <img src="https://i.ibb.co/pwBVWnC/crushers-icon-4-leaderboard.png" alt="crushers-icon-4-leaderboard" className="testy"/>
      {/* <img src="https://i.ibb.co/34H6YW5/crushers-icon-5-updates-ALERT.png" alt="crushers-icon-5-updates-ALERT" className="testy"/> */}
      <img src="https://i.ibb.co/C1hNtfb/crushers-icon-5-updates.png" alt="crushers-icon-5-updates" className="testy"/>
      <img src="https://i.ibb.co/WPnw9Wr/crushers-icon-6-profile.png" alt="crushers-icon-6-profile" className="testy"/>
      </div>
    </div>
  )
};

export default App;
