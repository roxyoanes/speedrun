import React from "react";

import aboutimg from "../images/aboutimg.jpg";

const About = () => (
  <div className="about" id="about">
    <div className="about__part1">
      <h2 className="about__heading">ABOUT US</h2>
      <img src={aboutimg} className="about__img" alt="img" />
    </div>
    <div className="about__part2">
      <h3 className="about__subheading">
        Lorem Ipsum has been the industry's standard dummy text ever..
      </h3>
      <p className="about__paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="about__paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </div>
  </div>
);

export default About;
