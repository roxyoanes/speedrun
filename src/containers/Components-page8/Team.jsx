import React from "react";

import img1 from "../images/team-1.jpg";
import img2 from "../images/team-2.jpg";
import img3 from "../images/team-3.jpg";
import img4 from "../images/team-4.jpg";

const Team = () => (
  <div className="team" id="#team">
    <div className="team__text-wrapper">
      <h2 className="team__title">Our Team</h2>
      <p className="team__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa 
        semper aliquam quis mattis quam.
      </p>
    </div>
    <div className="team__container">
      <div className="team__card">
        <img src={img1} className="team__img" alt="team-member" />
        <h4 className="team__name">Jane Dow</h4>
        <h5 className="team__role">Founder</h5>
        <p className="team__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
        <span className="team__icons-container">
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-facebook-f icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-twitter icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-google-plus icon" />
          </a>
        </span>
      </div>
      <div className="team__card">
        <img src={img2} className="team__img" alt="team-member" />
        <h4 className="team__name">Markus Linn</h4>
        <h5 className="team__role">Creative</h5>
        <p className="team__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
        <span className="team__icons-container">
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-facebook-f icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-twitter icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-google-plus icon" />
          </a>
        </span>
      </div>
      <div className="team__card">
        <img src={img3} className="team__img" alt="team-member" />
        <h4 className="team__name">Christina Jemes</h4>
        <h5 className="team__role">Technical</h5>
        <p className="team__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
        <span className="team__icons-container">
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-facebook-f icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-twitter icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-google-plus icon" />
          </a>
        </span>
      </div>
      <div className="team__card">
        <img src={img4} className="team__img" alt="team-member" />
        <h4 className="team__name">Vintes Mars</h4>
        <h5 className="team__role">Marketing</h5>
        <p className="team__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit eget risus vitae massa.</p>
        <span className="team__icons-container">
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-facebook-f icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-twitter icon" />
          </a>
          <a href="#top" className="team__icon-wrapper">
            <i className="fab fa-google-plus icon" />
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Team;
