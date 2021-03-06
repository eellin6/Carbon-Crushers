import * as React from 'react';
import Burger from './NavBurger';
import Nav from './Nav';

const Sidebar = () => {

  return (
    <div>
      <div id='sidebar'>
        <Burger />
        <Nav />
      </div>
    </div>
  );
};

export default Sidebar;
