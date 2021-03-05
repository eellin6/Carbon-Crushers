import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import HomePage from './HomePage';
import Profile from './Profile';
import axios from 'axios';

const Nav = () => {
  const [logoutStatus, setLogoutStatus] = useState();

  const animateBurger = () => {
    const burgerBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    burgerBtn.addEventListener('click', () => {
      if (!menuOpen) {
        burgerBtn.classList.add('open');
        menuOpen = true;
      } else {
        burgerBtn.classList.remove('open');
        menuOpen = false;
      }
    });
  }

  return (
    <div className='menu-btn' onClick={() => animateBurger()}>
      <div className='menu-btn-burger'></div>
      <Menu>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Edit Profile</Link>
          </li>
          <li>
            <Link to='/logout'>Log out</Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default Nav;
