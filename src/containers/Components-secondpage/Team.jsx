import React from 'react';

import '../../styles/second-page.scss';
import '../../styles/default.scss';

import person1 from '../images/person1.jpg';
import person2 from '../images/person2.jpg';
import person3 from '../images/person3.jpg';

const Team = () => (
  <div className="team-page">
    <h2 className="team-page__title">OUR AMAZING TEAM</h2>
    <h1 className="team-page__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="team-wrapper">
      <div className="team-card">
        <img src={person1} className="team-card__img" alt="" />
        <h4 className="team-card__title">Kay Garland</h4>
        <p className="team-card__p">Lead Designer</p>
        <div className="team-card-icons">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
      <div className="team-card">
        <img src={person2} className="team-card__img" alt="" />
        <h4 className="team-card__title">Larry Parker</h4>
        <p className="team-card__p">Lead Marketer</p>
        <div className="team-card-icons">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
      <div className="team-card">
        <img src={person3} className="team-card__img" alt="" />
        <h4 className="team-card__title">Diana Pertersen</h4>
        <p className="team-card__p">Lead Developer</p>
        <div className="team-card-icons">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
    </div>
    <p className="team-page__p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
      laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea,
      alias ut unde.
    </p>
  </div>
);

export default Team;
