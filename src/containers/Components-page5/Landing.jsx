import React from "react";

import landing5 from "../images/landing5.png";

const Landing = () => (
  <div className="landing" id="top">
    <div
      className="landing__text-section"
      data-aos="zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="1500"
    >
      <h2 className="landing__heading">
        The
        <strong className="landing__bold">BEST</strong>
        One Page Web Template
      </h2>
      <p className="landing__paragraph">
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the galley of type and scrambled it to
        make a type specimen.
      </p>
      <button className="landing-button" type="button">
        READ MORE
      </button>
    </div>
    <div className="landing__img-wrapper">
      <img
        src={landing5}
        className="landing__img"
        alt="landing-img"
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1500"
      />
    </div>
  </div>
);

export default Landing;
