import React from "react";

import logo from "../images/logo9.png";

const Landing = () => (
  <div className="landing" id="home">
    <div
      className="landing__logo-wrapper"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <img
        src={logo}
        className="landing__logo"
        alt="logo-landing"
      />
      <p className="landing__p">The Best Organic Restaurant In The Country</p>
      <p className="landing__p">With The Best Flavors</p>
      <span className="landing__socials-wrapper">
        <a
          href
          className="landing__icon-wrapper"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          <i className="fab fa-facebook-f icon" />
        </a>
        <a
          href
          className="landing__icon-wrapper"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        >
          <i className="fab fa-twitter icon" />
        </a>
        <a
          href
          className="landing__icon-wrapper"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="700"
        >
          <i className="fab fa-google-plus icon" />
        </a>
        <a
          href
          className="landing__icon-wrapper"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="900"
        >
          <i className="fab fa-pinterest icon" />
        </a>
      </span>
    </div>
  </div>

);

export default Landing;
