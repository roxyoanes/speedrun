import React from "react";

const Services = () => (
  <div className="services" id="services">
    <h2 className="services__title">OUR SERVICES</h2>
    <h6 className="services__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
    <div className="services__container">
      <div className="services__card">
        <span className="services__icon-wrap">
          <i className="fas fa-coffee service-icon" />
        </span>
        <h3 className="services__card-title">Breakfast</h3>
        <p className="services__card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="services__card">
        <span className="services__icon-wrap">
          <i className="fas fa-pizza-slice service-icon" />
        </span>
        <h3 className="services__card-title">Lunch</h3>
        <p className="services__card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="services__card">
        <span className="services__icon-wrap">
          <i className="fas fa-wine-glass-alt service-icon" />
        </span>
        <h3 className="services__card-title">Dinner</h3>
        <p className="services__card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="services__card">
        <span className="services__icon-wrap">
          <i className="fas fa-utensils service-icon" />
        </span>
        <h3 className="services__card-title">Buffet</h3>
        <p className="services__card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>
);

export default Services;
