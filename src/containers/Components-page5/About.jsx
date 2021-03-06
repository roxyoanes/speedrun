import React from "react";

import aboutimg from "../images/aboutimg.jpg";

const About = () => (
  <div className="about" id="about">
    <h2 className="about__heading">ABOUT US</h2>
    <div className="about__wrapper">
      <img
        src={aboutimg}
        className="about__img"
        alt="img"
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1500"
      />
      <div
        className="about__text"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h3 className="about__subheading">
          Lorem Ipsum has been the industry's standard dummy text ever..
        </h3>
        <p className="about__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p className="about__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
);

export default About;
