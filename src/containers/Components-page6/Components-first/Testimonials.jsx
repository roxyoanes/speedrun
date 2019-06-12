import React from "react";

import picture from "../../images/testimonials.jpg";

const Testimonials = () => (
  <div className="testimonials">
    <h3 className="testimonials__subtitle">Testimonials</h3>
    <div className="testimonials__card">
      <blockquote className="testimonials__quote-card">
        <p className="testimonials__p">Lorem ipsum dolor met consectetur adipisicing. Aorem psum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p>
      </blockquote>
      <div className="testimonials__info-card">
        <img src={picture} className="testimonials__img" alt="man" />
        <div className="testimonials__details">
          <h3 className="testimonials__name">Marc Cooper</h3>
          <h1 className="testimonials__job">Technical Director</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
