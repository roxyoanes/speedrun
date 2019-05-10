import React from "react";

const Skills = () => (
  <div className="skills" id="skills">
    <h2 className="skills__heading">SKILLS</h2>
    <h1 className="skills__languages">PROGRAMMING LANGUAGES & TOOLS</h1>
    <div className="icons">
      <span className="icons__symbol">
        <i className="fab fa-html5" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-css3-alt" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-css3-alt" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-js-square" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-angular" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-react" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-node-js" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-sass" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-less" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-wordpress" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-gulp" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-grunt" />
      </span>
      <span className="icons__symbol">
        <i className="fab fa-npm" />
      </span>
    </div>
    <div className="skills__workflow">
      <h1 className="skills__subheading">WORKFLOW</h1>
      <ul className="skills__list">
        <li className="skills__item">
          <i className="fas fa-check" />
          Mobile-First, Responsive Design
        </li>
        <li className="skills__item">
          <i className="fas fa-check" />
          Cross Browser Testing & Debugging
        </li>
        <li className="skills__item">
          <i className="fas fa-check" />
          Cross Functional Teams
        </li>
        <li className="skills__item">
          <i className="fas fa-check" />
          Agile Development & Scrum
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
