import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import img1 from "../images/photo12-1.jpg";
import img2 from "../images/photo12-2.jpg";
import img3 from "../images/photo12-3.jpg";
import img4 from "../images/photo12-4.jpg";
import img5 from "../images/photo12-5.jpg";
import img6 from "../images/photo12-6.jpg";
import img7 from "../images/photo12-7.jpg";
import img8 from "../images/photo12-8.jpg";

const photoData = [
  {
    id: 1,
    category: ["prototype", "all", "webapp"],
    image: img1,
    title: "Warm Oscar",
  },
  {
    id: 2,
    category: ["design", "all", "appleios"],
    image: img2,
    title: "Warm Oscar",
  },
  {
    id: 3,
    category: ["android", "all", "design"],
    image: img3,
    title: "Warm Oscar",
  },
  {
    id: 4,
    category: ["webapp", "all", "design"],
    image: img4,
    title: "Warm Oscar",
  },
  {
    id: 5,
    category: ["appleios", "all", "design"],
    image: img5,
    title: "Warm Oscar",
  },
  {
    id: 6,
    category: ["appleios", "all", "prototype"],
    image: img6,
    title: "Warm Oscar",
  },
  {
    id: 7,
    category: ["android", "all"],
    image: img7,
    title: "Warm Oscar",
  },
  {
    id: 8,
    category: ["webapp", "all"],
    image: img8,
    title: "Warm Oscar",
  },
];

class Projects extends Component {
  state= {
    allPhotos: photoData,
  }

  filterPhotos = (tag) => {
    const filteredImages = photoData.filter(photoObject => photoObject.category.includes(tag));
    this.setState({ allPhotos: filteredImages });
  };

  render() {
    const { allPhotos } = this.state;
    return (
      <div className="projects">
        <h2 className="projects__title">Projects</h2>
        <h6 className="projects__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
        <div className="projects__tags-container">
          <button
            type="button"
            onClick={() => this.filterPhotos("all")}
            className="projects__tag"
          >
            ALL
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("prototype")}
            className="projects__tag gallery"
          >
            PROTOTYPE
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("webapp")}
            className="projects__tag gallery"
          >
            WEB APP
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("appleios")}
            className="projects__tag gallery"
          >
            APPLE IOS
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("design")}
            className="projects__tag gallery"
          >
            DESIGN
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("android")}
            className="projects__tag gallery"
          >
            ANDROID
          </button>
        </div>
        <TransitionGroup className="projects__transition-container" data-aos="fade-right" data-aos-duration="1500">
          {allPhotos.map((item, i) => (
            <CSSTransition key={item.id} timeout={500} classNames="projects__item">
              <div className="projects__card">
                <img
                  src={item.image}
                  alt="img"
                  className="projects__image"
                  role="presentation"
                  onClick={() => openModalHandler(i + 1)}
                />
                <h5 className="card-title">
                    Warm
                  <strong className="projects__card-bold">Oscar</strong>
                </h5>
                <h6 className="card-subheading">
                  {item.description}
                </h6>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default Projects;
