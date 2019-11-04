import React from "react";
import PropTypes from "prop-types";

import "./modal12.scss";

import img1 from "../images/photo12-1.jpg";
import img2 from "../images/photo12-2.jpg";
import img3 from "../images/photo12-3.jpg";
import img4 from "../images/photo12-4.jpg";
import img5 from "../images/photo12-5.jpg";
import img6 from "../images/photo12-6.jpg";
import img7 from "../images/photo12-7.jpg";
import img8 from "../images/photo12-8.jpg";

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

const modal12 = ({ close, number }) => {
  const img = pickImage(number);
  return (
    <div>
      <div className="modal12">
        <div className="modal12__img-container">
          <img className="modal12__image" src={img} alt="img" />
          <button type="button" className="far fa-times-circle modal-btn" onClick={close} />
        </div>
      </div>
    </div>
  );
};


modal12.propTypes = {
  close: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};

export default modal12;
