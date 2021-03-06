import { SdStorageTwoTone } from '@material-ui/icons';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { IconContext } from "react-icons";
// import Sidebar from './Nav';



const Burger = () => {
  // const [menu, setMenu] = useState(false);

  // const animateBurger = () => {
  //   const burgerBtn = document.querySelector('.menu-btn');
  //   const sidebar = document.getElementById('sidebar');
  //   burgerBtn.addEventListener('click', () => {
  //     if (!menu) {
  //       burgerBtn.classList.add('open');
  //       // sidebar.classList.add('flyout');
  //       sidebar.style.marginLeft = '0';
  //       setMenu(prev => prev = !menu);
  //     } else {
  //       burgerBtn.classList.remove('open');
  //       // sidebar.classList.remove('flyout');
  //       setMenu(prev => prev = !menu)
  //     }
  //   });
  // }

  // const openMenu = () => {
  //   const menuIcon = document.getElementById('menu-icon');
  //   const menu = document.getElementById('sidebar');
  //   menuIcon.addEventListener('click', () => {
  //     menu.classList.add('open-menu');
  //   })
  // }

  const menu: HTMLElement = document.getElementById('sidebar');
  const openMenu = () => menu.classList.add('open-menu');
    // const openMenu = document.getElementById('sidebar');

  return (
    <div>
      <div className='menu-icon' onClick={() => openMenu()}>
        <IconContext.Provider value={{ size: '3em', color: '#525252' }}>
          <IoMenu />
        </IconContext.Provider>
      </div>
      {/* <div className='menu-btn' onClick={() => animateBurger()}>
      <div className='menu-btn-burger'></div> */}
      </div>
  );
};

export default Burger;
