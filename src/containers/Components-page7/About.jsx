import React from "react";

const About = () => (
  <div className="about" id="about">
    <div className="about__text-wrapper">
      <h3 className="about__title">We've got what you need!</h3>
      <hr className="divider divider--white" />
      <p className="about__paragraph">
        Start Bootstrap has everything you need to get your new website up and
        running in no time! Choose one of our open source, free to download, and
        easy to use themes! No strings attached!
      </p>
    </div>
    <div className="about__button-wrapper">
      <a href="#services" className="button-landing button-landing--white">
        GET STARTED!
      </a>
    </div>
  </div>
);

export default About;
