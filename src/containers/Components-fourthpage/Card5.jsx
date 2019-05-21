import React from "react";

const Card5 = () => (
  <div className="card-5" id="portfolio">
    <div className="card-5__container">
      <h3 className="card-5__portfolio">PORTFOLIO</h3>
      <h2 className="card-5__subheading">Recent Projects</h2>
    </div>
    <div className="captions">
      <div className="captions__card1">
        <a href="#top">
          <div className="captions__text">
            <h2 className="captions__title">STATIONARY</h2>
            <p className="captions__p">
              A yellow pencil with envelops on a clean, blue backdrop!
            </p>
          </div>
          <div className="captions__image-style captions__img1" />
        </a>
      </div>
      <div className="captions__card2">
        <a href="#top">
          <div className="captions__text">
            <h2 className="captions__title">ICE CREAM</h2>
            <p className="captions__p">
              A dark blue background with a colored pencil, a clip, and a tiny
              ice cream cone!
            </p>
          </div>
          <div className="captions__image-style captions__img2" />
        </a>
      </div>
      <div className="captions__card3">
        <a href="#top">
          <div className="captions__text">
            <h2 className="captions__title">STRAWBERRIES</h2>
            <p className="captions__p">
              Strawberries are such a tasty snack, especially with a little
              sugar on top
            </p>
          </div>
          <div className="captions__image-style captions__img3" />
        </a>
      </div>
      <div className="captions__card4">
        <a href="#top">
          <div className="captions__text">
            <h2 className="captions__title">WORKSPACE</h2>
            <p className="captions__p">
              A yellow workspace with some scissors, pencils, and other objects.
            </p>
          </div>
          <div className="captions__image-style captions__img4" />
        </a>
      </div>
    </div>
  </div>
);

export default Card5;
