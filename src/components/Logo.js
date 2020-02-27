import React from 'react';
import LogoImg from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <a href='#home'>
        <img src={LogoImg} alt='logo' />
      </a>
    </div>
  );
};

export default Logo;
