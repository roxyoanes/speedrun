import React from "react";

import pic1 from "../images/team-3.jpg";
import pic2 from "../images/team-2.jpg";
import pic3 from "../images/team-4.jpg";
import pic4 from "../images/client2.jpg";

const Testimonials = () => (
  <div className="testimonials">
    <h3 className="testimonials__title">Skills</h3>
    <p className="testimonials__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</p>
    <div className="testimonials__cards-container">
      <div className="testimonials__card">
        <img src={pic1} alt="client" className="testimonials__img" />
        <div className="testimonials__text-card">
          <h4 className="testimonials__card-title">Rosy Illue</h4>
          <p className="testimonials__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor.</p>
        </div>
      </div>
      <div className="testimonials__card">
        <img src={pic2} alt="client" className="testimonials__img" />
        <div className="testimonials__text-card">
          <h4 className="testimonials__card-title">Gabriel Mitchel</h4>
          <p className="testimonials__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor.</p>
        </div>
      </div>
      <div className="testimonials__card">
        <img src={pic3} alt="client" className="testimonials__img" />
        <div className="testimonials__text-card">
          <h4 className="testimonials__card-title">Andrew Milnj</h4>
          <p className="testimonials__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor.</p>
        </div>
      </div>
      <div className="testimonials__card">
        <img src={pic4} alt="client" className="testimonials__img" />
        <div className="testimonials__text-card">
          <h4 className="testimonials__card-title">Chris Jos</h4>
          <p className="testimonials__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
