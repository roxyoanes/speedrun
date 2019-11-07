import React from "react";

const Skills = () => (
  <div className="skills">
    <h3 className="skills__title">Skills</h3>
    <p className="skills__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</p>
    <div
      className="skills__container" 
      data-aos="zoom-in"
      data-aos-duration="1500">
      <div className="skills__card">
        <span className="skills__icon-container">
          <i className="fab fa-android skills-icon" />
        </span>
        <div className="skills__text-container">
          <h3 className="skills__text-title">Android</h3>
          <p className="skills__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <div className="skills__card">
        <span className="skills__icon-container">
          <i className="fab fa-apple skills-icon" />
        </span>
        <div className="skills__text-container">
          <h3 className="skills__text-title">Apple IOS</h3>
          <p className="skills__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <div className="skills__card">
        <span className="skills__icon-container">
          <i className="fab fa-html5 skills-icon" />
        </span>
        <div className="skills__text-container">
          <h3 className="skills__text-title">Design</h3>
          <p className="skills__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <div className="skills__card">
        <span className="skills__icon-container">
          <i className="fas fa-user skills-icon" />
        </span>
        <div className="skills__text-container">
          <h3 className="skills__text-title">Development</h3>
          <p className="skills__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
