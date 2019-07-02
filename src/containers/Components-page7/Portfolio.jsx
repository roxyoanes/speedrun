import React from "react";
import PropTypes from "prop-types";

import pic1 from "../images/portfolio1.jpg";
import pic2 from "../images/portfolio2.jpg";
import pic3 from "../images/portfolio3.jpg";
import pic4 from "../images/portfolio4.jpg";
import pic5 from "../images/portfolio5.jpg";
import pic6 from "../images/portfolio6.jpg";

const photos = [pic1, pic2, pic3, pic4, pic5, pic6];

const Portfolio = ({ openModalHandler }) => (
  <div className="portfolio" id="portfolio">
    {photos.map((photo, i) => (
      <div className="portfolio__card">
        <img
          src={photo}
          className="portfolio__img"
          alt="portfolio"
          role="presentation"
          onClick={() => openModalHandler(i + 1)}
        />
      </div>
    ))}
  </div>
);

Portfolio.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
};

export default Portfolio;
