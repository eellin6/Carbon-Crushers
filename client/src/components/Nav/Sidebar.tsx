import * as React from 'react';
import Burger from './NavBurger';
import Nav from './Nav';
import { IoClose, IoMenu } from "react-icons/io5";
import { IconContext } from "react-icons";

const Sidebar = () => {

  // <IconType.Provider value={{ color: "black", className: "menu-icon", size: '2em' }}></IconType.Provider>
  // const closeMenu = () => {
  //   const menuIcon = document.getElementById('menu-icon');
  //   const menu = document.getElementById('sidebar');
  //   menuIcon.addEventListener('click', () => {
  //     menu.classList.remove('open-menu');
  //   })
  // }

  const menu: HTMLElement = document.getElementById('sidebar');
  const closeMenu = () => menu.classList.remove('open-menu');



  return (
    <div>
      <div id='sidebar'>
        <div className='menu-icon'
          onClick={() => closeMenu()}>
          <IconContext.Provider value={{ size: '3em', color: 'white'}}>
            <IoClose />
          </IconContext.Provider>
        </div>
        {/* <Burger /> */}
        <Nav />
      </div>
    </div>
  );
};

export default Sidebar;
