import React from "react";
import PropTypes from "prop-types";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/04.jpg";
import pic5 from "../images/05.jpg";
import pic6 from "../images/06.jpg";

const Portfolio = ({ openModalHandler }) => (
  <div id="portfolio" className="portfolio">
    <h2 className="services-page__title">PORTFOLIO</h2>
    <h1 className="services-page__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="portfolio-images">
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic1}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(1)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Threads</h2>
        <h1 className="portfolio-images__sub-title-img">Illustration</h1>
      </div>
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic2}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(2)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Explore</h2>
        <h1 className="portfolio-images__sub-title-img">Graphic Design</h1>
      </div>
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic3}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(3)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Finish</h2>
        <h1 className="portfolio-images__sub-title-img">Identity</h1>
      </div>
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic4}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(4)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Lines</h2>
        <h1 className="portfolio-images__sub-title-img">Branding</h1>
      </div>
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic5}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(5)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Southwest</h2>
        <h1 className="portfolio-images__sub-title-img">Web Design</h1>
      </div>
      <div className="portfolio-images__wrapper">
        <figure className="portfolio-images__hover-image">
          <img
            src={pic6}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(6)}
            role="presentation"
          />
          <i className="fas fa-plus fa-3x" />
        </figure>
        <h2 className="portfolio-images__title-img">Window</h2>
        <h1 className="portfolio-images__sub-title-img">Photography</h1>
      </div>
    </div>
  </div>
);
Portfolio.propTypes = {
  openModalHandler: PropTypes.bool.isRequired,
};

export default Portfolio;
