import React from 'react';

import iconLink from '../../assets/icons/link-icon.svg';
import githubLink from '../../assets/icons/github-link.svg';
import imageProject from '../../assets/images/image-project.png';

import '../../styles/Projects.scss';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__main">
        <div className="projects__main-title">
          <span>Projects</span>
          <div className="projects__main-subtitle">
            <span>Things I’ve built so far</span>
          </div>
        </div>
        <div className="projects__main-carts">
          <div className="projects__main-item">
            <div className="projects__main-item-image">
              <img src={imageProject} alt="image project" />
            </div>
            <div className="projects__main-item-title">
              <span>Project Tile goes here</span>
            </div>
            <div className="projects__main-about">
              <span>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </span>
            </div>
            <div className="projects__main-stack">
              <span>Tech stack : HTML , JavaScript, SASS, React</span>
            </div>
            <div className="projects__main-links">
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
          <div className="projects__main-item">
            <div className="projects__main-item-image">
              <img src={imageProject} alt="image project" />
            </div>
            <div className="projects__main-item-title">
              <span>Project Tile goes here</span>
            </div>
            <div className="projects__main-about">
              <span>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </span>
            </div>
            <div className="projects__main-stack">
              <span>Tech stack : HTML , JavaScript, SASS, React</span>
            </div>
            <div className="projects__main-links">
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
          <div className="projects__main-item">
            <div className="projects__main-item-image">
              <img src={imageProject} alt="image project" />
            </div>
            <div className="projects__main-item-title">
              <span>Project Tile goes here</span>
            </div>
            <div className="projects__main-about">
              <span>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </span>
            </div>
            <div className="projects__main-stack">
              <span>Tech stack : HTML , JavaScript, SASS, React</span>
            </div>
            <div className="projects__main-links">
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
          <div className="projects__main-item">
            <div className="projects__main-item-image">
              <img src={imageProject} alt="image project" />
            </div>
            <div className="projects__main-item-title">
              <span>Project Tile goes here</span>
            </div>
            <div className="projects__main-about">
              <span>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </span>
            </div>
            <div className="projects__main-stack">
              <span>Tech stack : HTML , JavaScript, SASS, React</span>
            </div>
            <div className="projects__main-links">
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
    </div>
  );
};

export default Projects;
