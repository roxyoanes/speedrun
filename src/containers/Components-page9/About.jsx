import React from "react";

import about from "../images/about1.png";

const About = () => (
  <div className="about" id="about">
    <h2 className="about__title">Our Restaurant</h2>
    <h6 className="about__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
    <div className="about__card" data-aos="fade-right" data-aos-duration="1500">
      <img src={about} className="about__img" alt="glasses" />
      <div className="about__text-wrapper">
        <h3 className="about__card-title">Taste the Flavors</h3>
        <p className="about__card-p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit amet, conseconsectetur.</p>
        <p className="about__card-p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
        <div className="about__card-properties">
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Consectetur Morbi sagittis, sem quisci ipsum gravida tortor</h6>
          </span>
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida</h6>
          </span>
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci gravida</h6>
          </span>
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Consectetur Morbi sagittis, sem quisci ipsum gravida tortor</h6>
          </span>
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Sagittis, sem quis lacinia faucibus, orci ipsum gravida</h6>
          </span>
          <span className="about__property">
            <i className="fas fa-check-circle" />
            <h6 className="about__sent">Ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci</h6>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default About;
