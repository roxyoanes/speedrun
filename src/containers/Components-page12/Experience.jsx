import React from "react";

import img1 from "../images/iphone_logo.png";
import img2 from "../images/android_logo.png";
import img3 from "../images/samsung_logo.png";
import img4 from "../images/micro_logo.png";

const Experience = () => (
  <div className="experience">
    <h2 className="experience__title">Worked For</h2>
    <div className="experience__companies">
      <div className="experience__icon-container" data-aos="fade-left" data-aos-duration="1500">
        <img src={img1} alt="brand" className="experience__img" />
        <img src={img2} alt="brand" className="experience__img" />
        <img src={img3} alt="brand" className="experience__img" />
        <img src={img4} alt="brand" className="experience__img" />
      </div>
    </div>
  </div>
);

export default Experience;
