import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../button/Button';

import logo from '../../../../assets/images/logo.svg';
import '../../../../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__buttons">
        <Button link={'/home'}>Home</Button>
        <Button link={'/about'}>About</Button>
        <Button link={'/tech-stack'}>Tech Stack</Button>
        <Button link={'/projects'}>Projects</Button>
        <Button link={'/contact'}>Contact</Button>
        <Button link={'/questions'}>Questions</Button>
      </div>
    </div>
  );
};

export default Header;
