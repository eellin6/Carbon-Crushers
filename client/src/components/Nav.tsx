import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  // let menuOpen = false;

  const animateBurger = () => {
    const burgerBtn = document.querySelector('.menu-btn');
    burgerBtn.addEventListener('click', () => {
      if (!menu) {
        burgerBtn.classList.add('open');
        setMenu(prev => prev = !menu)
        // menuOpen = true;
      } else {
        burgerBtn.classList.remove('open');
        setMenu(prev => prev = !menu)
        // menuOpen = false;
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
