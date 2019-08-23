import React from "react";

const Features = () => (
  <div className="features">
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
);

export default Features;
