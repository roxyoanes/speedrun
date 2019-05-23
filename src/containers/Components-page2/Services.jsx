import React from "react";

import "../../styles/second-page.scss";
import "../../styles/default.scss";

const Services = () => (
  <div id="service" className="services-page">
    <h2 className="services-page__title">SERVICES</h2>
    <h1 className="services-page__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="icons">
      <div className="card-icon">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
        </span>
        <h4 className="card-icon__icons-title">E-Commerce</h4>
        <p className="card-icon__p-card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
      <div className="card-icon">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fas fa-laptop fa-stack-1x fa-inverse" />
        </span>
        <h4 className="card-icon__icons-title--two">Responsive Design</h4>
        <p className="card-icon__p-card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
      <div className="card-icon">
        <span className="fa-stack fa-2x">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fas fa-lock fa-stack-1x fa-inverse" />
        </span>
        <h4 className="card-icon__icons-title">Web Security</h4>
        <p className="card-icon__p-card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
    </div>
  </div>
);

export default Services;
