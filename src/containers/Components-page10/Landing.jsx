import React from "react";

import img from "../images/about10.png";

const Landing = () => (
  <div className="landing" id="home" data-aos="fade-right" data-aos-duration="1500">
    <div className="landing__text-wrapper">
      <h1 className="landing__title">App Landing Page</h1>
      <p className="landing__p">Lorem Ipsum is simply dummy text of the printing and type setting industry consectetur adipisicing elit, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing tempor incididunt!</p>
      <div className="landing__social">
        <button className="stores-btn" type="button">
          <i className="fab fa-apple icon" />
          <span className="landing__social-name">App Store</span>
        </button>
        <button className="stores-btn" type="button">
          <i className="fab fa-android icon" />
          <span className="landing__social-name">Google Play</span>
        </button>
      </div>
    </div>
    <div className="landing__img-wrapper">
      <img src={img} alt="phone" className="landing__img" />
    </div>
  </div>
);

export default Landing;
