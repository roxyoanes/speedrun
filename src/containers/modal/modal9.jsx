import React from "react";
import PropTypes from "prop-types";

import "./modal9.scss";

import img1 from "../images/portfolio_pic1.jpg";
import img2 from "../images/portfolio_pic2.jpg";
import img3 from "../images/portfolio_pic3.jpg";
import img4 from "../images/portfolio_pic4.jpg";
import img5 from "../images/portfolio_pic5.jpg";
import img6 from "../images/portfolio_pic6.jpg";
import img7 from "../images/portfolio_pic7.jpg";
import img8 from "../images/portfolio_pic8.jpg";

const pickImage = (number) => {
  switch (number) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    case 6:
      return img6;
    case 7:
      return img7;
    case 8:
      return img8;
    default:
      return img1;
  }
};

const modal9 = ({ close, number }) => {
  const img = pickImage(number);
  return (
    <div>
      <div className="modal">
        <div className="modal__wrapper">
          <span role="presentation" className="modal-btn" onClick={close}>
            ×
          </span>
          <div className="modal__img-container">
            <img className="modal__image" src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

modal9.propTypes = {
  close: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default modal9;
