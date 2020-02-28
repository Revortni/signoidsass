import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import AvatarImg from '../assets/pp.png';
import { MdMenu } from 'react-icons/md';

const Header = params => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleStyle = 'header__toggle-container--show';
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <div className='header__options'>
          <div
            className={
              'header__toggle-container ' + (showMenu ? toggleStyle : '')
            }
          >
            <Nav />
            <div className='header__item'>
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
          <div className='header__toggle-icon' onClick={toggleMenu}>
            <MdMenu size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
