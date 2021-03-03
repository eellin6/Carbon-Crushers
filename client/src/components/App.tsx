import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import Login from './GoogleLogin';
// @ts-ignore
import * as style from './style.css';
import HomePage from './HomePage';

// declare module '*.css' {
//   const content: Record<string, string>;
//   export default content;
// }

const App = () => {

  // useEffect(() => {
  //   const [currentStatus, setCurrentStatus] = useState();
  //   const isLoggedIn: any = axios.get('/isLoggedin')
  //     .then(({ data }: any) => {
  //       console.log(data);
  //       setCurrentStatus(data);
  //     })
  //     .catch((err: string) => console.warn(err));
  // }, []);

  // const getLoginStatus = () => {
  //   const [currentStatus, setCurrentStatus] = useState(false);
  //   axios.get('/isLoggedin')
  //     .catch(({ data }: any) => setCurrentStatus(data));
  // };

  const logout = (bool: boolean) => {
    const [logoutStatus, setLogoutStatus] = useState(bool);
    setLogoutStatus((bool) => !bool);
  };

  const loginWrapper: string = "login-wrapper";
  const logoWelcome: string = "logo-welcome";

  return (
    <div id={loginWrapper}>
      <img id={logoWelcome} alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
      <Login />
      <h1>Hello World</h1>
      <HomePage />
    </div>
  )
};

export default App;
