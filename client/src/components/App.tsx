import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
// import {Login} from './GoogleLogin';
import GoogleButton from 'react-google-button';
// @ts-ignore
import * as style from './style.css';
import HomePage from './HomePage';

const App = () => {
  const [currentStatus, setCurrentStatus] = useState(false);
  // const [logoutStatus, setLogoutStatus] = useState();

  // check if user is logged in
  const getLoginStatus = () => {
    axios.get('/isLoggedin')
      .then(({ data }: any) => setCurrentStatus(data))
      .catch((err: string) => console.warn(err));
  };
  getLoginStatus();

  // const logout = () => {
  //   setLogoutStatus((bool) => !bool);
  // };

  return (
    <div id="wrapper">
      <img id="logo-welcome" alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
      {/* <div id="login-button"><Login /></div> */}
      <a href="/auth/google"><GoogleButton type="light" /></a>
      <HomePage />
    </div>
  )
};

export default App;
