import React from "react";

import image1 from "../images/landing81.jpg";

const About = () => (
  <div className="about" id="#about">
    <div className="about__img-wrapper">
      <img src={image1} className="about__img" alt="living-room" />
    </div>
    <div className="about__wrapper">
      <h3 className="about__title">About Our Company</h3>
      <p className="about__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <br />
      <p className="about__p">
      Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div className="about__btn-wrapper">
      <a href="#gallery" className="about-btn">OUR GALLERY</a>
    </div>
  </div>
);

export default About;
