import React from "react";

import pic from "../images/feature2-image.png";

const About = () => (
  <div className="about">
    <div className="about__img-wrapper">
      <img src={pic} alt="about" className="about__img" />
    </div>
    <div className="about__text-wrapper">
      <h2 className="about__title">Learn how to make your app marketing efficient</h2>
      <p className="about__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.</p>
    </div>
  </div>
);

export default About;
