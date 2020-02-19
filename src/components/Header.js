import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = params => {
  return (
    <header className='header'>
      <div className='outer-container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__options'>
          <div className='header__nav'>
            <Nav />
          </div>
          <a href='#profile'>
            <div className='profile avatar'>
              <div className='profile__image avatar__photo'>
                <img src='./assets/pp.png' alt='profile' />
              </div>
              <span className='profile__info'>john</span>
              <span className='profile__icon'>
                <i class='fa fa-sort-down'></i>
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
