import React from 'react';

import Header from '../ui/layout/header/Header';

import "../../styles/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__main">
        <div className="about__main-title">
          <span>About me</span>
        </div>
        <div className="about__main-info">
          <span>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
