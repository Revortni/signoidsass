import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  return (
    <nav className='nav'>
      <NavLink
        to='/projects'
        alt='nav'
        className='nav__link '
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
