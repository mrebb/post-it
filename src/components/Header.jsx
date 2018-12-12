import React from 'react';
import Logo from '../data/assets/logo.png';
import '../components/styles/Header.scss';

const HeaderBar = props=> {

  return (
    <div className="header-main">
      <img src={Logo} alt='post-it' className="header-logoSize" />
      <h1 className = "header-text-center">Post | Comment | Vote</h1>
    </div>
  );
  
};

export default HeaderBar;