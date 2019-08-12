import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import img1 from "../images/portfolio_pic1.jpg";
import img2 from "../images/portfolio_pic2.jpg";
import img3 from "../images/portfolio_pic3.jpg";
import img4 from "../images/portfolio_pic4.jpg";
import img5 from "../images/portfolio_pic5.jpg";
import img6 from "../images/portfolio_pic6.jpg";
import img7 from "../images/portfolio_pic7.jpg";
import img8 from "../images/portfolio_pic8.jpg";

const photoData = [
  {
    id: 1,
    category: ["continental", "all", "northeast"],
    image: img1,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 2,
    category: ["all", "continental"],
    image: img2,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 3,
    category: ["chinese", "all", "european"],
    image: img3,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 4,
    category: ["continental", "all"],
    image: img4,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 5,
    category: ["asian", "all", "northeast"],
    image: img5,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 6,
    category: ["asian", "all", "northeast"],
    image: img6,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 7,
    category: ["continental", "all", "northeast"],
    image: img7,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
  {
    id: 8,
    category: ["asian", "all"],
    image: img8,
    title: "Warm Oscar",
    description: "OSCAR IS A DECENT MAN. HE USED TO CLEAN PORCHES WITH PLEASURE.",
  },
];

class Gallery extends Component {
  state= {
    allPhotos: photoData,
  };

  filterPhotos = (tag) => {
    const filteredImages = photoData.filter(photoObject => photoObject.category.includes(tag));
    this.setState({ allPhotos: filteredImages });
  };

  render() {
    const { allPhotos } = this.state;
    const { openModalHandler } = this.props;
    return (
      <div className="gallery">
        <h2 className="gallery__title">Projects</h2>
        <h6 className="gallery__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
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
            onClick={() => this.filterPhotos("chinese")}
            className="gallery__tag gallery__backslash"
          >
            CHINESE
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("continental")}
            className="gallery__tag gallery__backslash"
          >
            CONTINENTAL
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("asian")}
            className="gallery__tag gallery__backslash"
          >
            ASIAN
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("european")}
            className="gallery__tag gallery__backslash"
          >
            EUROPEAN
          </button>
          <button
            type="button"
            onClick={() => this.filterPhotos("northeast")}
            className="gallery__tag gallery__backslash"
          >
            NORTHEAST
          </button>
        </div>
        <div className="gallery__images-container">
          <TransitionGroup className="gallery__transition-container">
            {allPhotos.map((item, i) => (
              <CSSTransition key={item.id} timeout={500} classNames="gallery__item">
                <div className="gallery__card">
                  <img
                    src={item.image}
                    alt="img"
                    className="gallery__image"
                    role="presentation"
                    onClick={() => openModalHandler(i + 1)}
                  />
                  <h5 className="gallery__card-title">
                    Warm
                    <strong className="gallery__card-bold">Oscar</strong>
                  </h5>
                  <h6 className="gallery__card-subheading">
                    {item.description}
                  </h6>
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
