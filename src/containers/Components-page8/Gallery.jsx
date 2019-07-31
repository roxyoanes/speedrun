import React from "react";
import PropTypes from "prop-types";

import img1 from "../images/gallery01.jpg";
import img2 from "../images/gallery02.jpg";
import img3 from "../images/gallery03.jpg";
import img4 from "../images/gallery04.jpg";
import img5 from "../images/gallery005.jpg";
import img6 from "../images/gallery006.jpg";
import img7 from "../images/gallery007.jpg";
import img8 from "../images/gallery008.jpg";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = ({ openModalHandler }) => (
  <div className="gallery" id="gallery">
    <div className="gallery__text-wrapper">
      <h2 className="gallery__title">Gallery</h2>
      <p className="gallery__p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
      semper aliquam quis mattis quam.
      </p>
    </div>
    <div className="gallery__pic-wrapper">
      {photos.map((photo, i) => (
        <div className="gallery__card" role="presentation" onClick={() => openModalHandler(i + 1)}>
          <div className="gallery__gradient">
            <img src={photo} className="gallery__pic" alt="interior-design" />
            <span className="icon-container">
              <i className="fas fa-search search" />
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Gallery.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};

export default Gallery;
