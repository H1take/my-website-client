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
import iconLink from '../../assets/icons/link-icon.svg';
import githubLink from '../../assets/icons/github-link.svg';
import imageProject from '../../assets/images/image-project.png';

import '../../styles/Stack.scss';

const Stack = () => {
  return (
    <div className="stack">
      <div className="stack__main">
        <div className="stack__main-title">
          <span>My Tech Stack</span>
          <div className='stack__main-subtitle'>
          <span>Technologies I’ve been working with recently</span>
          </div>
        </div>
        <div className="stack__main-logos">
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
      </div>
    </div>
  );
};

export default Stack;
