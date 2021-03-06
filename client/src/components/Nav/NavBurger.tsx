import { SdStorageTwoTone } from '@material-ui/icons';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Sidebar from './Nav';

const Burger = () => {
  const [menu, setMenu] = useState(false);

  const animateBurger = () => {
    const burgerBtn = document.querySelector('.menu-btn');
    const sidebar = document.getElementById('sidebar');
    burgerBtn.addEventListener('click', () => {
      if (!menu) {
        burgerBtn.classList.add('open');
        // sidebar.classList.add('flyout');
        sidebar.style.marginLeft = '0';
        setMenu(prev => prev = !menu);
      } else {
        burgerBtn.classList.remove('open');
        // sidebar.classList.remove('flyout');
        setMenu(prev => prev = !menu)
      }
    });
  }

  return (
      <div className='menu-btn' onClick={() => animateBurger()}>
        <div className='menu-btn-burger'></div>
      </div>
  );
};

export default Burger;
