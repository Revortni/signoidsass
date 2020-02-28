import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <NavLink
        to='/projects'
        alt='nav'
        className='nav__link'
        activeClassName='nav__link--active'
      >
        projects
      </NavLink>
      <NavLink
        to='/datasets'
        alt='nav'
        className='nav__link'
        activeClassName='nav__link--active'
      >
        data library
      </NavLink>
      <NavLink
        to='#insight-gallery'
        alt='nav'
        className='nav__link nav__link--disabled'
      >
        insight gallery
      </NavLink>
    </nav>
  );
};

export default Nav;
