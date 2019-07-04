import React from "react";

const Landing = () => (
  <div className="landing">
    <div className="landing__text-wrapper">
      <h3 className="landing__title">
        YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES
      </h3>
      <hr className="divider" />
      <p className="landing__paragraph">
        Start Bootstrap can help you build better websites using the Bootstrap
        framework! Just download a theme and start customizing, no strings
        attached!
      </p>
    </div>
    <div className="landing__button-wrapper">
      <a href="#about" className="button-landing">FIND OUT MORE</a>
    </div>
  </div>
);

export default Landing;
