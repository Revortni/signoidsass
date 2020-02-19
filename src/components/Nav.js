import React from 'react';
const Nav = () => {
  return (
    <nav className='nav'>
      <a href='#project' alt='nav' className='nav__link nav__link--active'>
        projects
      </a>
      <a href='#data-library' alt='nav' className='nav__link'>
        data library
      </a>
      <a
        href='#insight-gallery'
        alt='nav'
        className='nav__link nav__link--disabled'
      >
        insight gallery
      </a>
    </nav>
  );
};

export default Nav;
