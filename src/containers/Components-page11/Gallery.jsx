import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import pic1 from "../images/portfolio11.jpg";
import pic2 from "../images/portfolio11-2.jpg";
import pic3 from "../images/portfolio11-3.jpg";
import pic4 from "../images/portfolio11-4.jpg";
import pic5 from "../images/portfolio11-5.jpg";
import pic6 from "../images/portfolio11-6.jpg";
import pic7 from "../images/portfolio11-7.jpg";
import pic8 from "../images/portfolio11-8.jpg";
import pic9 from "../images/portfolio12-11.jpg";
import pic10 from "../images/portfolio11-10.jpg";
import pic11 from "../images/portfolio13-12.jpg";

const photos = [
  {
    id: 1,
    category: ["web", "all", "mobile"],
    image: pic1,
    title: "PROJECT TITLE",
  },
  {
    id: 2,
    category: ["web", "all", "app"],
    image: pic2,
    title: "PROJECT TITLE",
  },
  {
    id: 3,
    category: [ "all", "app"],
    image: pic3,
    title: "PROJECT TITLE",
  },
  {
    id: 4,
    category: ["mobile", "all"],
    image: pic4,
    title: "PROJECT TITLE",
  },
  {
    id: 5,
    category: [ "all", "app"],
    image: pic5,
    title: "PROJECT TITLE",
  },
  {
    id: 6,
    category: ["mobile", "all", "web"],
    image: pic6,
    title: "PROJECT TITLE",
  },
  {
    id: 7,
    category: ["web", "all"],
    image: pic7,
    title: "PROJECT TITLE",
  },
  {
    id: 8,
    category: ["web", "all"],
    image: pic8,
    title: "PROJECT TITLE",
  },
  {
    id: 9,
    category: ["app", "all"],
    image: pic9,
    title: "PROJECT TITLE",
  },
  {
    id: 10,
    category: ["web", "all", ],
    image: pic10,
    title: "PROJECT TITLE",
  },
  {
    id: 11,
    category: ["mobile", "all"],
    image: pic11,
    title: "PROJECT TITLE",
  },
  {
    id: 12,
    category: ["all"],
    image: pic9,
    title: "PROJECT TITLE",
  },
];

class Gallery extends Component {
  state= {
    allPhotos: photos,
  };

  filterPhotos = (tag) => {
    const filteredImages = photos.filter(photoObject => photoObject.category.includes(tag));
    this.setState({ allPhotos: filteredImages });
  };

  render() {
    const { openModalHandler } = this.props;
    const { allPhotos } = this.state;
    return (
      <div className="gallery" id="gallery">
        <h3 className="gallery__title">Our Team</h3>
        <p className="gallery__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. laudantium culpa tenetur.</p>
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
            onClick={() => this.filterPhotos("web")}
            className="gallery__tag"
          >
            WEB DESIGN
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("mobile")}
            className="gallery__tag"
          >
            MOBILE APPS
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("app")}
            className="gallery__tag"
          >
            APP DEVELOPMENT
          </button>
        </div>
        <div className="gallery__images-container">
          <TransitionGroup>
            {allPhotos.map((item, i) => (
              <CSSTransition key={item.id} timeout={400}>
                <div className="gallery__card">
                  <div className="gallery__gradient">
                    <img
                      src={item.image}
                      alt="img"
                      className="gallery__image-style"
                    />
                    <span
                      className="container-icon"
                      role="presentation"
                      onClick={() => openModalHandler(i + 1)}
                    >
                      <i className="fas fa-search search" />
                    </span>
                  </div>
                  <h5 className="gallery__card-title" role="presentation" onClick={() => openModalHandler(i + 1)}>{item.title}</h5>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};

export default Gallery;
