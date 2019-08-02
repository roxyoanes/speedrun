import React from "react";

const Services = () => (
  <div className="services" id="services">
    <div className="services__text-section">
      <h2 className="services__title">Our Services</h2>
      <p className="services__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
        semper aliquam quis mattis quam.
      </p>
    </div>
    <div className="services__wrapper">
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fas fa-chess-knight" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">KITCHEN</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fas fa-suitcase" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">LIVING ROOM</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fas fa-pencil-ruler" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">BATHROOM</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fab fa-react" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">PENTHOUSE</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fas fa-bullhorn" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">OFFICE</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
      <div className="services__card">
        <span className="services__icon-container">
          <i className="fas fa-trophy" />
        </span>
        <div className="services__card-content">
          <h5 className="services__card-title">BED ROOM</h5>
          <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
