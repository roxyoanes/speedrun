import React from "react";

import pic1 from "../images/team-3.jpg";
import pic2 from "../images/team-2.jpg";
import pic3 from "../images/team-4.jpg";
import pic4 from "../images/client2.jpg";

const personArray = [
  {
    img: pic1,
    name: "Rosy Illue",
  },
  {
    img: pic2,
    name: "Gabriel Mitchel",
  },
  {
    img: pic3,
    name: "Andrew Milnj",
  },
  {
    img: pic4,
    name: "Chris Jos",
  },
];

const Testimonials = () => (
  <div className="testimonials">
    <h3 className="testimonials__title">Skills</h3>
    <p className="testimonials__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</p>
    <div className="testimonials__cards-container">
      {personArray.map(value => (
        <div className="testimonials__card">
          <img src={value.img} alt="client" className="testimonials__img" />
          <div className="testimonials__text-card">
            <h4 className="testimonials__card-title">{value.name}</h4>
            <p className="testimonials__p">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum gravida tortor.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
