import React from "react";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/04.jpg";
import pic5 from "../images/05.jpg";
import pic6 from "../images/06.jpg";

const Portfolio = ({ openModalHandler }) => (
  <div className="portfolio">
    <h2 className="services-page__title">PORTFOLIO</h2>
    <h1 className="services-page__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="portfolio-images">
      <div className="wrapper">
        <figure className="hover-image">
          <i className="fas fa-plus" />
          <img
            src={pic1}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(1)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Threads</h2>
        <h1 className="portfolio-images__sub-title-img">Illustration</h1>
      </div>
      <div className="wrapper">
        <figure className="hover-image">
          <img
            src={pic2}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(2)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Explore</h2>
        <h1 className="portfolio-images__sub-title-img">Graphic Design</h1>
      </div>
      <div className="wrapper">
        <figure className="hover-image">
          <img
            src={pic3}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(3)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Finish</h2>
        <h1 className="portfolio-images__sub-title-img">Identity</h1>
      </div>
      <div className="wrapper">
        <figure className="hover-image">
          <img
            src={pic4}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(4)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Lines</h2>
        <h1 className="portfolio-images__sub-title-img">Branding</h1>
      </div>
      <div className="wrapper">
        <figure className="hover-image">
          <img
            src={pic5}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(5)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Southwest</h2>
        <h1 className="portfolio-images__sub-title-img">Web Design</h1>
      </div>
      <div className="wrapper">
        <figure className="hover-image">
          <img
            src={pic6}
            className="portfolio-images__img"
            alt=""
            onClick={() => openModalHandler(6)}
            role="presentation"
          />
        </figure>
        <h2 className="portfolio-images__title-img">Window</h2>
        <h1 className="portfolio-images__sub-title-img">Photography</h1>
      </div>
    </div>
  </div>
);

export default Portfolio;
