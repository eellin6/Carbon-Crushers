import * as React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useRoutes, Link } from 'react-router-dom'
import axios from 'axios';
import GoogleButton from 'react-google-button';
import Nav from './Nav';
import HomePage from './HomePage';
import Profile from './Profile';
import Login from './Login';
import Stats from './Stats'
import Graphs from './Graph';
import Shower from './Stat Entries/Shower';
import Footer from './Footer';

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

  const graphsRoute = {
    path: '/graphs',
    element: <Graphs />
  };

  const showerRoute = {
    path: '/shower',
    element: <Shower />
  };

  const logoutRoute = {
    path: '/',
    element: <Profile />
  };

  const routing = useRoutes([homeRoute, profileRoute, statsRoute, graphsRoute, showerRoute, logoutRoute]);

  return (
    <div>
      <Nav />
      <div id='wrapper'>
        { routing }
        <Footer />
      </div>
    </div>
  )
};

export default App;
