import React from "react";


import teamPic1 from "../images/teamPic1.jpg";
import teamPic2 from "../images/teamPic2.jpg";
import teamPic3 from "../images/teamPic3.jpg";

const Team = () => (
  <div className="team">
    <h2 className="team__heading">TEAM</h2>
    <p className="team__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing.
    </p>
    <div className="team-cards-container">
      <div className="team__card">
        <div className="team__box">
          <div className="team__box-shadow">
            <span className="team__icons">
              <i className="fab fa-twitter team-icon" />
              <i className="fab fa-facebook team-icon" />
              <i className="fab fa-pinterest team-icon" />
              <i className="fab fa-google-plus team-icon" />
            </span>
          </div>
          <img src={teamPic1} className="team__img" alt="person" />
        </div>
        <h3 className="team__person-name">Tom Rensed</h3>
        <h6 className="team__position">Chief Executive Officer</h6>
        <p className="team__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing consectetur elit
          proin consequat.
        </p>
      </div>
      <div className="team__card">
        <div className="team__box">
          <div className="team__box-shadow">
            <span className="team__icons">
              <i className="fab fa-twitter team-icon" />
              <i className="fab fa-facebook team-icon" />
              <i className="fab fa-pinterest team-icon" />
              <i className="fab fa-google-plus team-icon" />
            </span>
          </div>
          <img src={teamPic2} className="team__img" alt="person" />
        </div>
        <h3 className="team__person-name">Kathren Mory</h3>
        <h6 className="team__position">Vice President</h6>
        <p className="team__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing consectetur elit
          proin consequat.
        </p>
      </div>
      <div className="team__card">
        <div className="team__box">
          <div className="team__box-shadow">
            <span className="team__icons">
              <i className="fab fa-twitter team-icon" />
              <i className="fab fa-facebook team-icon" />
              <i className="fab fa-pinterest team-icon" />
              <i className="fab fa-google-plus team-icon" />
            </span>
          </div>
          <img src={teamPic3} className="team__img" alt="person" />
        </div>
        <h3 className="team__person-name">Lancer Jack</h3>
        <h6 className="team__position">Senior Manager</h6>
        <p className="team__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing consectetur elit
          proin consequat.
        </p>
      </div>
    </div>
  </div>
);

export default Team;
