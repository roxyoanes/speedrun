import React from "react";


import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port3.jpg";
import card4pr4 from "../images/card4pr4.jpg";

const Card5 = () => (
  <div className="card-5" id="portfolio">
    <div className="card-5__container">
      <h3 className="card-5__portfolio">PORTFOLIO</h3>
      <h2 className="card-5__subheading">Recent Projects</h2>
    </div>
    <div className="captions">
      <div className="captions__card">
        <div className="captions__overlay" />
        <div className="captions__text">
          <h2 className="captions__title">STATIONARY</h2>
          <p className="captions__p">
            A yellow pencil with envelops on a clean, blue backdrop!
          </p>
        </div>
        <img src={port1} className="captions__img" alt="img" />
      </div>
      <div className="captions__card">
        <div className="captions__overlay" />
        <div className="captions__text">
          <h2 className="captions__title">ICE CREAM</h2>
          <p className="captions__p">
            A dark blue background with a colored pencil, a clip, and a tiny ice
            cream cone!
          </p>
        </div>
        <img src={port2} className="captions__img" alt="img" />
      </div>
      <div className="captions__card">
        <div className="captions__overlay" />
        <div className="captions__text">
          <h2 className="captions__title">STRAWBERRIES</h2>
          <p className="captions__p">
            Strawberries are such a tasty snack, especially with a little sugar
            on top
          </p>
        </div>
        <img src={port3} className="captions__img" alt="img" />
      </div>
      <div className="captions__card">
        <div className="captions__overlay" />
        <div className="captions__text">
          <h2 className="captions__title">WORKSPACE</h2>
          <p className="captions__p">
            A yellow workspace with some scissors, pencils, and other objects.
          </p>
        </div>
        <img src={card4pr4} className="captions__img" alt="img" />
      </div>
    </div>
  </div>
);

export default Card5;
