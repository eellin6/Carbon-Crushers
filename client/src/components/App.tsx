import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import HomePage from './HomePage';
import Profile from './Profile';
import Nav from './Nav';
import { slide as Menu } from 'react-burger-menu';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'

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

  // const animateBurger = () => {
  //   const burgerBtn = document.querySelector('.menu-btn');
  //   let menuOpen = false;
  //   burgerBtn.addEventListener('click', () => {
  //     if (!menuOpen) {
  //       burgerBtn.classList.add('open');
  //       menuOpen = true;
  //     } else {
  //       burgerBtn.classList.remove('open');
  //       menuOpen = false;
  //     }
  //   });
  // }


  return (
      <div id="wrapper">
        {/* <div className='menu-btn' onClick={() => animateBurger()}>
          <div className='menu-btn-burger'></div>
        </div> */}
        {
          !currentStatus
          ? <div>
              <img id='logo-welcome' alt='Carbon Crushers Logo' src='https://i.ibb.co/5RDm28b/carbon-crushers-logo.png'/>
              <a href='/auth/google' className='google-button'>
                <GoogleButton type='light' />
              </a>
            </div>
          :
          <div id='nav'>
            <Router>
              <Nav />
              <Switch>
                <Route path='/profile'><Profile /></Route>
                <Route path='/logout' ></Route>
                <Route exact path='/'><HomePage /></Route>
              </Switch>
            </Router>
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
