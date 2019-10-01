import React from "react";

const Services = () => (
  <div className="services" id="services">
    <h2 className="services__title">Services</h2>
    <div className="services__cards-wrapper">
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="fas fa-trophy icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">User Research</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="fas fa-cog icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">Data Collection</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="fas fa-laptop icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">Designing</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="far fa-clock icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">Development</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="fas fa-heart icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">Quality</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-wrapper">
          <i className="fas fa-magic icon" />
        </span>
        <div className="services__text">
          <h3 className="services__card-title">Release</h3>
          <p className="services__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
