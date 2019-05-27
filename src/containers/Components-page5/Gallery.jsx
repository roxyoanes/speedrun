import React from "react";

import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";

const Gallery = () => (
  <div className="gallery">
    <h2 className="gallery__heading">GALLERY</h2>
    <p className="gallery__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing.
    </p>
    <div className="gallery__tags-container">
      <a href="#top" className="gallery__tag">
        ALL
      </a>
      <a href="#top" className="gallery__tag gallery__backslash">
        ARTWORK
      </a>
      <a href="#top" className="gallery__tag gallery__backslash">
        CREATIVE
      </a>
      <a href="#top" className="gallery__tag gallery__backslash">
        NATURE
      </a>
      <a href="#top" className="gallery__tag gallery__backslash">
        OUTSIDE
      </a>
      <a href="#top" className="gallery__tag gallery__backslash">
        PHOTOGRAPHY
      </a>
    </div>
    <div className="gallery__images-container">
      <div className="gallery__card">
        <img src={gallery1} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">1st gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
      <div className="gallery__card">
        <img src={gallery2} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">2nd gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
      <div className="gallery__card">
        <img src={gallery3} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">3rd gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
      <div className="gallery__card">
        <img src={gallery4} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">4th gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
      <div className="gallery__card">
        <img src={gallery5} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">5th gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
      <div className="gallery__card">
        <img src={gallery6} className="gallery__img" alt="hand" />
        <h5 className="gallery__card-title">6th gallery Item</h5>
        <h6 className="gallery__card-subheading">
          Nullam id dolor id nibh ultricies vehicula.
        </h6>
      </div>
    </div>
  </div>
);

export default Gallery;