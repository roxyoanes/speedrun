import React from "react";

import pic from "../images/about12.png";

const About = () => (
  <div className="about">
    <h3 className="about__title">Who Am I</h3>
    <p className="about__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</p>
    <div className="about__wrapper">
      <img className="about__img" src={pic} alt="about-pic" />
      <div className="about__text-wrapper">
        <h3 className="about__text-wrapper-title">I Design Awesome Web Apps</h3>
        <p className="about__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.</p>
        <p className="about__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
        <ul className="about__list">
          <li className="about__list-item">
            <i className="fas fa-check-circle check" />
          Consectetur Morbi sagittis, sem quisci ipsum gravida tortor
          </li>
          <li className="about__list-item">
            <i className="fas fa-check-circle check" />
          Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida
          </li>
          <li className="about__list-item">
            <i className="fas fa-check-circle check" />
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci gravida
          </li>
          <li className="about__list-item">
            <i className="fas fa-check-circle check" />
            Sagittis, sem quis lacinia faucibus, orci ipsum gravida
          </li>
          <li className="about__list-item">
            <i className="fas fa-check-circle check" />
            Ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
