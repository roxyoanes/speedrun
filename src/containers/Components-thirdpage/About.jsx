import React from "react";

const About = () => (
  <div className="about" id="about">
    <div className="about__name">
      <h2 className="about__heading about__heading--first">CLARENCE</h2>
      <h2 className="about__heading about__heading--second">TAYLOR</h2>
    </div>
    <div className="about__subheading">
      3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 ·
      <a href="mailto:name@email.com" className="about__email">
        NAME@EMAIL.COM
      </a>
    </div>
    <p className="about__description">
      I am experienced in leveraging agile frameworks to provide a robust
      synopsis for high level overviews. Iterative approaches to corporate
      strategy foster collaborative thinking to further the overall value
      proposition.
    </p>
    <div className="icons-media">
      <a href="#about" className="icons-media__hover">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
        </span>
      </a>
      <a href="#about" className="icons-media__hover">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-github fa-stack-1x fa-inverse" />
        </span>
      </a>
      <a href="#about" className="icons-media__hover">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-twitter fa-stack-1x fa-inverse" />
        </span>
      </a>
      <a href="#about" className="icons-media__hover">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
        </span>
      </a>
    </div>
  </div>
);

export default About;
