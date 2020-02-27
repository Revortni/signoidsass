import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import AvatarImg from '../assets/pp.png';

const Header = params => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__options'>
          <Nav />
          <div className='header__profile'>
            <a href='#profile'>
              <div className='profile avatar'>
                <div className='profile__image avatar__photo'>
                  <img src={AvatarImg} alt='profile' />
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
