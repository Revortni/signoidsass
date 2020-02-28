import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  return (
    <nav className='nav'>
      <Link to='/projects' alt='nav' className='nav__link nav__link--active'>
        projects
      </Link>
      <Link to='/datasets' alt='nav' className='nav__link'>
        data library
      </Link>
      <Link
        to='#insight-gallery'
        alt='nav'
        className='nav__link nav__link--disabled'
      >
        insight gallery
      </Link>
    </nav>
  );
};

export default Nav;
