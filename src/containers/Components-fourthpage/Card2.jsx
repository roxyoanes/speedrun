import React from "react";

const Card2 = () => (
  <div className="card-2" id="about">
    <div className="card-2__container">
      <h2 className="card-2__subheading">
        Stylish Portfolio is the perfect theme for your next project!
      </h2>
      <p className="card-2__description">
        This theme features a flexible, UX friendly sidebar menu and stock
        photos from our friends at
        <a href="https://unsplash.com/" className="link-website">
          Unsplash
        </a>
        !
      </p>
      <a href="#services" className="button-card button-card--color">
        What We Offer
      </a>
    </div>
  </div>
);

export default Card2;
