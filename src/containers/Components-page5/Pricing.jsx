import React from "react";

const Pricing = () => (
  <div className="pricing">
    <h2 className="pricing__heading">PRICING</h2>
    <p className="pricing__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing.
    </p>
    <div className="pricing__cards-container">
      <div className="pricing__card">
        <h2 className="pricing__title">Starter</h2>
        <div className="pricing__content">
          <p className="pricing__price">
            <sup>$</sup>
            8.00
          </p>
          <p>Best Template</p>
          <p>Clean and modern</p>
          <p>Bootstrap & HTML5</p>
          <p>24/7 support</p>
        </div>
        <div className="pricing__button-wrapper">
          <button type="button" className="button">
            Buy Now
          </button>
        </div>
      </div>
      <div className="pricing__card">
        <h2 className="pricing__title">Popular</h2>
        <div className="pricing__content">
          <p className="pricing__price">
            <sup>$</sup>
            12.00
          </p>
          <p>Best Template</p>
          <p>Clean and modern</p>
          <p>Bootstrap & HTML5</p>
          <p>24/7 support</p>
        </div>
        <div className="pricing__button-wrapper">
          <button type="button" className="button">
            Buy Now
          </button>
        </div>
      </div>
      <div className="pricing__card">
        <h2 className="pricing__title">Business</h2>
        <div className="pricing__content">
          <p className="pricing__price">
            <sup>$</sup>
            16.00
          </p>
          <p>Best Template</p>
          <p>Clean and modern</p>
          <p>Bootstrap & HTML5</p>
          <p>24/7 support</p>
        </div>
        <div className="pricing__button-wrapper">
          <button type="button" className="button">
            Buy Now
          </button>
        </div>
      </div>
      <div className="pricing__card--noshow">
        <h2 className="pricing__title">Enterprise</h2>
        <div className="pricing__content">
          <p className="pricing__price">
            <sup>$</sup>
            20.00
          </p>
          <p>Best Template</p>
          <p>Clean and modern</p>
          <p>Bootstrap & HTML5</p>
          <p>24/7 support</p>
        </div>
        <div className="pricing__button-wrapper">
          <button type="button" className="button">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
