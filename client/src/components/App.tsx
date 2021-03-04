import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import HomePage from './HomePage';

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
        </div>
      }
    </div>
  )
};

export default App;
