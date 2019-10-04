import React from "react";

import "../../styles/default.scss";
import "./modal11.scss";

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
    case 7:
      return pic7;
    case 8:
      return pic8;
    case 9:
      return pic9;
    case 10:
      return pic10;
    case 11:
      return pic11;
    case 12:
      return pic9;
    default:
      return pic1;
  }
};

const modal = ({ close, number }) => {
  const img = pickImage(number);
  return (
    <div>
      <div
        className="modal11"
        style={{
          opacity: "1",
        }}
      >
        <div className="modal11__header">
          <h2>PROJECT TITLE</h2>
          <span role="presentation" className="close-modal-btn" onClick={close}>×</span>
        </div>
        <div className="modal11__body">
          <img className="modal11__image" src={img} alt="img" />
          <h3 className="modal11__body-title">Project Description</h3>
          <p className="modal11__body-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt.</p>
          <button className="button-end" type="button" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
