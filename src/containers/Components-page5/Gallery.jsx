import React, { Component } from "react";
import PropTypes from "prop-types";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";

const photoData = [
  {
    id: 1,
    category: ["artwork", "all", "creative"],
    image: gallery1,
    title: "1st gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  },
  {
    id: 2,
    category: ["nature", "all", "outside"],
    image: gallery2,
    title: "2nd gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  },
  {
    id: 3,
    category: ["artwork", "all", "photography"],
    image: gallery3,
    title: "3rd gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  },
  {
    id: 4,
    category: ["nature", "all"],
    image: gallery4,
    title: "4th gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  },
  {
    id: 5,
    category: ["nature", "all", "creative"],
    image: gallery5,
    title: "5sth gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  },
  {
    id: 6,
    category: ["artwork", "all", "creative"],
    image: gallery6,
    title: "6th gallery Item",
    description: " Nullam id dolor id nibh ultricies vehicula."
  }
];

class Gallery extends Component {
  state = {
    allPhotos: photoData
  };

  filterPhotos = tag => {
    const filteredImages = photoData.filter(photoObject =>
      photoObject.category.includes(tag)
    );
    this.setState({ allPhotos: filteredImages });
  };

  render() {
    const { openModalHandler } = this.props;
    const { allPhotos } = this.state;
    return (
      <div className="gallery" id="portfolio">
        <h2 className="gallery__heading">GALLERY</h2>
        <p className="gallery__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <div className="gallery__tags-container">
          <button
            type="button"
            onClick={() => this.filterPhotos("all")}
            className="gallery__tag"
          >
            ALL
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("artwork")}
            className="gallery__tag gallery__backslash"
          >
            ARTWORK
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("creative")}
            className="gallery__tag gallery__backslash"
          >
            CREATIVE
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("nature")}
            className="gallery__tag gallery__backslash"
          >
            NATURE
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("outside")}
            className="gallery__tag gallery__backslash"
          >
            OUTSIDE
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("photography")}
            className="gallery__tag gallery__backslash"
          >
            PHOTOGRAPHY
          </button>
        </div>
        <div className="gallery__images-container">
          {allPhotos.map(item => (
            <div className="gallery__card">
              <div className="gallery__gradient">
                <img
                  src={item.image}
                  alt="img"
                  className="gallery__image-style"
                />
                <span
                  className="fa-stack fa-2x container-icon1"
                  role="presentation"
                  onClick={() => openModalHandler(1)}
                >
                  <i className="fas fa-square fa-stack-2x" />
                  <i className="fa fa-eye fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-2x container-icon2">
                  <a href="#top" className="gallery__icon-link">
                    <i className="fas fa-square fa-stack-2x" />
                    <i className="fa fa-link fa-stack-1x fa-inverse" />
                  </a>
                </span>
              </div>
              <h5 className="gallery__card-title">{item.title}</h5>
              <h6 className="gallery__card-subheading">{item.description}</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};

export default Gallery;
