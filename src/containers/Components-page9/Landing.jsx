import React from "react";

import logo from "../images/logo9.png";

const Landing = () => (
  <div className="landing">
    <div className="landing__logo-wrapper">
      <img src={logo} className="landing__logo" alt="logo-landing" />
      <p className="landing__p">The Best Organic Restaurant In The Country</p>
      <p className="landing__p">With The Best Flavors</p>
      <span className="landing__socials-wrapper">
        <a href className="landing__icon-wrapper">
          <i className="fab fa-facebook-f icon" />
        </a>
        <a href className="landing__icon-wrapper">
          <i className="fab fa-twitter icon" />
        </a>
        <a href className="landing__icon-wrapper">
          <i className="fab fa-google-plus icon" />
        </a>
        <a href className="landing__icon-wrapper">
          <i className="fab fa-pinterest icon" />
        </a>
      </span>
    </div>
  </div>

);

export default Landing;
