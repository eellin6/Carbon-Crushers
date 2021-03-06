import * as React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useRoutes, Link } from 'react-router-dom'
import axios from 'axios';
import GoogleButton from 'react-google-button';
import Sidebar from './Nav/Sidebar';
// import Burger from './Nav/NavBurger';
import HomePage from './HomePage';
import Profile from './Profile';
import Login from './Login';
import Stats from './Stats'
import Graphs from './Graph';

const App: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState();

  // check if user is logged in
  const getLoginStatus = () => {
    axios.get('/isLoggedin')
      .then(({ data }: any) => setCurrentStatus(data))
      .catch((err: string) => console.warn(err));
  };
  getLoginStatus();

  const isLoggedIn = (currentStatus: boolean) => {
    return !currentStatus ? <Login /> : <HomePage />;
  }

  const homeRoute = {
    path: '/',
    element: isLoggedIn(currentStatus)
  };

  const profileRoute = {
    path: '/profile',
    element: <Profile />
  };

  const statsRoute = {
    path: '/stats',
    element: <Stats />
  };

  const logoutRoute = {
    path: '/',
    element: <Profile />
  };

  const routing = useRoutes([homeRoute, profileRoute, statsRoute, logoutRoute]);

  return (
    <div>
      <Sidebar />
      <div id="wrapper">
      { routing }
        {
          <div>
              <button className='btn'
                onClick={() => axios.delete('/logout')
                  .then(({ data }) => setLogoutStatus(data))
                  .catch((err) => console.warn(err))} ><i>logout</i>
              </button>

            <div className='footerBtn'>
              <Link to='/'><img src="https://i.ibb.co/d4qH65N/crushers-icon-1-doughnut.png" alt="crushers-icon-1-doughnut" className="testy" /></Link>
              <img src="https://i.ibb.co/3Cf1jPf/crushers-icon-2-graph.png" alt="crushers-icon-2-graph" className="testy"/>
              <img src="https://i.ibb.co/k1Y2RT8/crushers-icon-3-timer.png" alt="crushers-icon-3-timer" className="testy"/>
              <img src="https://i.ibb.co/pwBVWnC/crushers-icon-4-leaderboard.png" alt="crushers-icon-4-leaderboard" className="testy"/>
              {/* <img src="https://i.ibb.co/34H6YW5/crushers-icon-5-updates-ALERT.png" alt="crushers-icon-5-updates-ALERT" className="testy"/> */}
              <img src="https://i.ibb.co/C1hNtfb/crushers-icon-5-updates.png" alt="crushers-icon-5-updates" className="testy"/>
              <Link to='/profile'><img src="https://i.ibb.co/WPnw9Wr/crushers-icon-6-profile.png" alt="crushers-icon-6-profile" className="testy"/></Link>
            </div>
          </div>
        }
      </div>
    </div>
  )
};

export default App;
