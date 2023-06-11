import React from 'react';

import avatar from '../../assets/images/avatar.png';
import bootstrapLogo from '../../assets/icons/bootstrap-icon.svg';
import cssLogo from '../../assets/icons/css-icon.svg';
import gitLogo from '../../assets/icons/git-icon.svg';
import greensockLogo from '../../assets/icons/greensock-icon.svg';
import htmlLogo from '../../assets/icons/html-icon.svg';
import jsLogo from '../../assets/icons/js-icon.svg';
import reactLogo from '../../assets/icons/react-icon.svg';
import reduxLogo from '../../assets/icons/redux-icon.svg';
import sassLogo from '../../assets/icons/sass-icon.svg';
import tailwindLogo from '../../assets/icons/tailwind-icon.svg';
import githubLogo from '../../assets/icons/github-icon.svg';
import vscodeLogo from '../../assets/icons/vscode-icon.svg';
import iconLink  from "../../assets/icons/link-icon.svg";
import githubLink from "../../assets/icons/github-link.svg";
import imageProject from '../../assets/images/image-project.png';

import '../../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__about">
        <div className="home__about-text">
          <span>Hi 👋, My name is Dmitriy I build things for web</span>
        </div>
        <div className="home__about-avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="home__stack-header">
        <div className="home__stack-header-title">
          <span>My Tech Stack</span>
        </div>
        <div className="home__stack-header-subtitle">
          <span>Technologies I’ve been working with recently</span>
        </div>
      </div>
      <div className="home__stack-logotypes">
        <div>
          <img src={htmlLogo} alt="logo" />
          <img src={cssLogo} alt="logo" />
          <img src={jsLogo} alt="logo" />
          <img src={reactLogo} alt="logo" />
          <img src={reduxLogo} alt="logo" />
          <img src={gitLogo} alt="logo" />
          <img src={githubLogo} alt="logo" />
          <img src={vscodeLogo} alt="logo" />
          <img src={tailwindLogo} alt="logo" />
          <img src={greensockLogo} alt="logo" />
          <img src={sassLogo} alt="logo" />
          <img src={bootstrapLogo} alt="logo" />
        </div>
      </div>
      <div className="home__projects-header">
        <div className="home__projects-header-title">
          <span>Projects</span>
        </div>
        <div className="home__projects-header-subtitle">
          <span>Things I’ve built so far</span>
        </div>
      </div>
      <div className="home__projects">
        <div className="home__projects-item">
          <div className="home__projects-item-image">
            <img src={imageProject} alt="image project" />
          </div>
          <div className="home__projects-title">
            <span>Project Tile goes here</span>
          </div>
          <div className='home__projects-about'>
            <span>
              This is sample project description random things are here in
              description This is sample project lorem ipsum generator for dummy
              content
            </span>
          </div>
          <div className='home__projects-stack'>
            <span>Tech stack : HTML , JavaScript, SASS, React</span>
          </div>
          <div className='home__projects-links'>
            <div>
                <img src={iconLink} alt="link source code" />
                <span>link source code</span>
            </div>
            <div>
                <img src={githubLink} alt="link github code" />
                <span>github link</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
