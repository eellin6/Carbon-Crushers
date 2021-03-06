import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Burger from './NavBurger';

const Nav = () => {
  // const [menu, setMenu] = useState(false);
  const menu: HTMLElement = document.getElementById('sidebar');
  const closeMenu = () => menu.classList.remove('open-menu');

  return (
    <div>
        <ul>
          <li onClick={() => closeMenu()}>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link to='/profile'>Edit Profile</Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link to='/stats'>Enter New Stats</Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link to='/'>Log out</Link>
          </li>
        </ul>
    </div>
  );
};

export default Nav;
