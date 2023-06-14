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
        <Button color={"#666666"} link={'/home'}>Home</Button>
        <Button color={"#666666"} link={'/about'}>About</Button>
        <Button color={"#666666"} link={'/tech-stack'}>Tech Stack</Button>
        <Button color={"#666666"} link={'/projects'}>Projects</Button>
        <Button color={"#666666"} link={'/contact'}>Contact</Button>
        <Button color={"#666666"} link={'/questions'}>Questions</Button>
      </div>
    </div>
  );
};

export default Header;
