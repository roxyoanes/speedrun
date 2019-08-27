import React from "react";

import img from "../images/feat2.png";

const Features = () => (
  <div className="features">
    <div className="features__part1">
      <h2 className="features__title">Our Amazing beautiful features</h2>
      <p className="features__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div className="features__container">
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-paint-brush icon-feat" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Fully Customizable</h4>
            <p className="features__card-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
          </div>
        </div>
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-rss icon-feat" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Responsive Design</h4>
            <p className="features__card-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
          </div>
        </div>
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-recycle icon-feat" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Amazing Design</h4>
            <p className="features__card-p">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="features__part2">
      <h2 className="features__title">Our Focused on Feature</h2>
      <div className="features__container">
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-paint-brush icon-feat icon-feat--part2" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Reliable and Secure Platform</h4>
            <p className="features__card-p">Lorem ipsum dolor sit amet, consectetur adipisici ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com</p>
          </div>
        </div>
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-rss icon-feat icon-feat--part2" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Everything is perfectly orgainized</h4>
            <p className="features__card-p">Aipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          </div>
        </div>
        <div className="features__card">
          <span className="features__icon-wrapper">
            <i className="fa fa-recycle icon-feat icon-feat--part2" />
          </span>
          <div className="features__text__wrapper">
            <h4 className="features__card-title">Rapid customer support</h4>
            <p className="features__card-p">Lorem ipsum dolor sit amet, consectetur adipisici ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com.</p>
          </div>
        </div>
      </div>
      <div className="features__image-wrapper">
        <img src={img} className="features__img" alt="features-img" />
      </div>
    </div>
    <div className="features__part3">
      <div className="features__icon-wrapper">
        <i className="fa fa-envelope icon-feat icon-feat--part3" />
      </div>
      <p className="features__card-p features__card-p--part3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
      <div className="features__email-wrapper">
        <input className="features__form" placeholder="Your email..." />
        <button className="features__email-button" type="button">SUBSCRIBE</button>
      </div>
    </div>
  </div>
);

export default Features;
