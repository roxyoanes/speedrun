import React from "react";

import "../../styles/default.scss";
import "./modal.scss";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/04.jpg";
import pic5 from "../images/05.jpg";
import pic6 from "../images/06.jpg";

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

const pickClient = (number) => {
  switch (number) {
    case 1:
      return (
        <ul className="modal-body__list">
          <li>December 2017</li>
          <li>Client: Threads</li>
          <li>Category: Illustration</li>
        </ul>
      );
    case 2:
      return (
        <ul className="modal-body__list">
          <li>June 2017</li>
          <li>Client: Explore</li>
          <li>Category: Graphic Design</li>
        </ul>
      );
    case 3:
      return (
        <ul className="modal-body__list">
          <li>July 2017</li>
          <li>Client: Finish</li>
          <li>Category: Identity</li>
        </ul>
      );
    case 4:
      return (
        <ul className="modal-body__list">
          <li>August 2017</li>
          <li>Client: Lines</li>
          <li>Category: Branding</li>
        </ul>
      );
    case 5:
      return (
        <ul className="modal-body__list">
          <li>September 2017</li>
          <li>Client: Southwest</li>
          <li>Category: Web Design</li>
        </ul>
      );
    case 6:
      return (
        <ul className="modal-body__list">
          <li>October 2017</li>
          <li>Client: Window</li>
          <li>Category: Photography</li>
        </ul>
      );
    default:
      return (
        <ul className="modal-body__list">
          <li>December 2017</li>
          <li>Client: Threads</li>
          <li>Category: Illustration</li>
        </ul>
      );
  }
};

const modal = ({ close, number }) => {
  const img = pickImage(number);
  const name = pickClient(number);

  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          opacity: "1",
        }}
      >
        <div className="modal-header">
          <span role="presentation" className="close-modal-btn" onClick={close}>×</span>
        </div>
        <div className="title">
          <h2>PROJECT NAME</h2>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="modal-body">
          <img className="modal-body__image" src={img} alt="img" />
          <p className="modal-body__p">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
          {name}
          <button className="button" type="button" onClick={close}>X Close Project</button>
        </div>
      </div>
    </div>
  );
};

export default modal;
