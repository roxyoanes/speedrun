import React from "react";
import PropTypes from "prop-types";

import "./modal7.scss";

import pic1 from "../images/portfolio1.jpg";
import pic2 from "../images/portfolio2.jpg";
import pic3 from "../images/portfolio3.jpg";
import pic4 from "../images/portfolio4.jpg";
import pic5 from "../images/portfolio5.jpg";
import pic6 from "../images/portfolio6.jpg";

const pickImage = (number) => {
  switch (number) {
    case 1:
      return pic1;
    case 2:
      return pic2;
    case 3:
      return pic3;
    case 4:
      return pic4;
    case 5:
      return pic5;
    case 6:
      return pic6;
    default:
      return pic1;
  }
};

const modal7 = ({ close, number }) => {
  const img = pickImage(number);
  return (
    <div>
      <div className="modal7">
        <div className="modal7__wrapper">
          <span role="presentation" className="modal-btn" onClick={close}>
            ×
          </span>
          <div className="modal7__img-container">
            <img className="modal7__image" src={img} alt="img" />
            <button type="button" className="button-left">
              <span className="modal7__arrow-left" />
            </button>
            <button type="button" className="button-right">
              <span className="modal7__arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

modal7.propTypes = {
  close: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default modal7;
