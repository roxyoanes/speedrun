import React from "react";

import company from "../../images/company.jpg";

const Company = () => (
  <div className="company">
    <div className="company__info">
      <h2 className="company__first-title">OUR COMPANY</h2>
      <p className="company__description">
        Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin
        molestie malesuada Pellentesque ipsum id orci porta dapibus. Vivamus
        suscipit tortor eget felis porttitor volutpat.
      </p>
    </div>
    <div className="company__about-wrapper">
      <div className="company__container">
        <p className="company__about">
          Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur aliquet quam id dui
          posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque
          in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis
          porttitor volutpat.
        </p>
        <span className="company__list-wrapper">
          <i className="fas fa-angle-right" />
          <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
        </span>
        <span className="company__list-wrapper">
          <i className="fas fa-angle-right" />
          <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
        </span>
        <span className="company__list-wrapper">
          <i className="fas fa-angle-right" />
          <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
        </span>
        <span className="company__list-wrapper">
          <i className="fas fa-angle-right" />
          <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
        </span>
        <div className="company__btn-wrapper">
          <a href="#top" className="company__btn">
            LEARN MORE
          </a>
        </div>
      </div>

      <div className="company__first-img-wrapper">
        <img src={company} alt="laptop" className="company__img" />
      </div>
    </div>
  </div>
);

export default Company;
