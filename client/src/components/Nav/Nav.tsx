import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Burger from './NavBurger';

const Nav = () => {
  // const [menu, setMenu] = useState(false);

  return (
    <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Edit Profile</Link>
          </li>
          <li>
            <Link to='/stats'>Enter New Stats</Link>
          </li>
          <li>
            <Link to='/logout'>Log out</Link>
          </li>
        </ul>
    </div>
  );
};

export default Nav;
