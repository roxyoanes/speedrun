import React from "react";

import team1 from "../images/team1.jpg";
import team2 from "../images/team3sdv.jpg";
import team3 from "../images/teamPic3.jpg";
import team4 from "../images/teamPic2.jpg";

const Team = () => (
  <div className="team" id="team">
    <h3 className="team__title">Our Team</h3>
    <p className="team__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. laudantium culpa tenetur.</p>
    <div className="team__wrapper">
      <div className="team__card">
        <img src={team1} className="team__img" alt="team" />
        <div className="team__info">
          <h3 className="team__name">Jane Doe</h3>
          <h1 className="team__job">General Manager</h1>
          <span className="team__icon-wrapper">
            <a href="top" className="team__icon-a">
              <i className="fab fa-twitter team-icon" />
            </a>
            <a href="top" className="team__icon-a">
              <i className="fab fa-facebook team-icon" />
            </a>
          </span>
        </div>
      </div>
      <div className="team__card">
        <img src={team2} className="team__img" alt="team" />
        <div className="team__info">
          <h3 className="team__name">Mike Wilson</h3>
          <h1 className="team__job">UI/UX Designer</h1>
          <span className="team__icon-wrapper">
            <a href="top" className="team__icon-a">
              <i className="fab fa-twitter team-icon" />
            </a>
            <a href="top" className="team__icon-a">
              <i className="fab fa-facebook team-icon" />
            </a>
          </span>
        </div>
      </div>
      <div className="team__card">
        <img src={team3} className="team__img" alt="team" />
        <div className="team__info">
          <h3 className="team__name">Hannah Millis</h3>
          <h1 className="team__job">Project Manager</h1>
          <span className="team__icon-wrapper">
            <a href="top" className="team__icon-a">
              <i className="fab fa-twitter team-icon" />
            </a>
            <a href="top" className="team__icon-a">
              <i className="fab fa-facebook team-icon" />
            </a>
          </span>
        </div>
      </div>
      <div className="team__card">
        <img src={team4} className="team__img" alt="team" />
        <div className="team__info">
          <h3 className="team__name">James Resll</h3>
          <h1 className="team__job">Software Developer</h1>
          <span className="team__icon-wrapper">
            <a href="top" className="team__icon-a">
              <i className="fab fa-twitter team-icon" />
            </a>
            <a href="top" className="team__icon-a">
              <i className="fab fa-facebook team-icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
