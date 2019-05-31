import React from "react";
import PropTypes from "prop-types";

import "./modal5.scss";

import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";

const pickImage = (number) => {
  switch (number) {
    case 1:
      return gallery1;
    case 2:
      return gallery2;
    case 3:
      return gallery3;
    case 4:
      return gallery4;
    case 5:
      return gallery5;
    case 6:
      return gallery6;
    default:
      return gallery1;
  }
};

const modal5 = ({ close, number }) => {
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

modal5.propTypes = {
  close: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default modal5;
