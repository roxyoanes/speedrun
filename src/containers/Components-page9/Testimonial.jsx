import React from "react";

import img1 from "../images/testimonial1.jpg";
import img2 from "../images/teamPic1.jpg";
import img3 from "../images/teamPic2.jpg";
import img4 from "../images/teamPic3.jpg";


const Testimonial = () => (
  <div className="testimonial">
    <h2 className="testimonial__title">Testimonial</h2>
    <h6 className="testimonial__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
    <div className="testimonial__team-container">
      <div className="testimonial__card">
        <img src={img1} className="testimonial__img" alt="person" />
        <h4 className="testimonial__name">Rosy Illue</h4>
        <p className="testimonial__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
      </div>
      <div className="testimonial__card">
        <img src={img2} className="testimonial__img" alt="person" />
        <h4 className="testimonial__name">Rosy Illue</h4>
        <p className="testimonial__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
      </div>
      <div className="testimonial__card">
        <img src={img3} className="testimonial__img" alt="person" />
        <h4 className="testimonial__name">Rosy Illue</h4>
        <p className="testimonial__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
      </div>
      <div className="testimonial__card">
        <img src={img4} className="testimonial__img" alt="person" />
        <h4 className="testimonial__name">Rosy Illue</h4>
        <p className="testimonial__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor orci ipsum gravida tortor.</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
