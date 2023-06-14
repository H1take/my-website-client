import React from 'react';

import logo from '../../../../assets/images/logo.svg';
import githubLogo from '../../../../assets/icons/github-icon.svg';

import '../../../../styles/Footer.scss';
import Button from '../../button/Button';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links-info">
          <span>+ 7 999 872 43 79</span>
          <span>h1take@mail.ru</span>
          <img src={githubLogo} alt="github logo" />
        </div>
      </div>
      <div className="footer__line" />
      <div className="footer__navigation">
        <div className="footer__navigation-buttons">
          <Button color={'#42446E'} link={'/home'}>
            Home
          </Button>
          <Button color={'#42446E'} link={'/about'}>
            About
          </Button>
          <Button color={'#42446E'} link={'/technologies'}>
            Technologies
          </Button>
          <Button color={'#42446E'} link={'/projects'}>
            Projects
          </Button>
          <Button color={'#42446E'} link={'/contact'}>
            Contact
          </Button>
        </div>
        <div className="footer__navigation-subtitle">
          <span>Designed and built by Pavan MG with Love & Coffee</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
