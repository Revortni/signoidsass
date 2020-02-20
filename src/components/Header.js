import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = params => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__options'>
          {/* <div className='header__nav'> */}
          <Nav />
          {/* </div> */}
          <div className='header__profile'>
            <a href='#profile'>
              <div className='profile avatar'>
                <div className='profile__image avatar__photo'>
                  <img src='./assets/pp.png' alt='profile' />
                </div>
                <span className='profile__info'>john</span>
              </div>
            </a>
            <span className='icon'>
              <i className='fa fa-sort-down'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
