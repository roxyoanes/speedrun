import React from "react";

import pic1 from "../images/screen1.jpg";

const Screenshots = () => (
  <div className="screenshots">
    <div className="screenshots__title-wrapper">
      <h2 className="screenshots__title">Screenshots</h2>
      <div className="screenshots__oneline" />
    </div>
    <div className="screenshots__cards-wrapper">
      <div className="screenshots__card">
        <img src={pic1} alt="screenshot1" className="screenshots__img" />
      </div>
    </div>
    <div className="screenshots__buttons-wrapper">
      <span className="btn-screen" />
    </div>
  </div>
);

export default Screenshots;
