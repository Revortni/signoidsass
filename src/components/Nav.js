import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  return (
    <nav className='nav'>
      <a
        href='/projects'
        alt='nav'
        className='nav__link nav__link--active'
        onClick={() => {
          history.push('/projects');
        }}
      >
        projects
      </a>
      <a
        href='/datasets'
        alt='nav'
        className='nav__link'
        onClick={() => {
          history.push('/datasets');
        }}
      >
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
