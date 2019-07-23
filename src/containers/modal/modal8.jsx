import React from "react";
import PropTypes from "prop-types";

import "./modal8.scss";

import img1 from "../images/gallery01.jpg";
import img2 from "../images/gallery02.jpg";
import img3 from "../images/gallery03.jpg";
import img4 from "../images/gallery04.jpg";
import img5 from "../images/gallery005.jpg";
import img6 from "../images/gallery006.jpg";
import img7 from "../images/gallery007.jpg";
import img8 from "../images/gallery008.jpg";
import btn from "../images/button-modal.png";

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

const modal8 = ({ close, number }) => {
  const img = pickImage(number);
  return (
    <div>
      <div className="modal8">
        <div className="modal8__img-container">
          <img className="modal8__image" src={img} alt="img" />
        </div>
        <img src={btn} alt="btn" className="modal-btn" role="presentation" onClick={close} />
      </div>
    </div>
  );
};

modal8.propTypes = {
  close: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default modal8;
