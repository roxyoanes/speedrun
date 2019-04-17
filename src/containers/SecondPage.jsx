import React from 'react';

import '../styles/second-page.scss';
import '../styles/default.scss';

const SecondPage = () => (
  <div className="secondpage">
    <div className="container">
      <div className="navbar">
        <a className="start" href="#top">Start Bootstrap</a>
        <div className="navbar__right-side">
          <nav className="navbar__elements">
            <button className="button" type="button">SERVICES</button>
            <button className="button" type="button">PORTFOLIO</button>
            <button className="button" type="button">ABOUT</button>
            <button className="button" type="button">TEAM</button>
            <button className="button" type="button">CONTACT</button>
          </nav>
        </div>
      </div>
      <div className="landing-page">
        <h2 className="landing-page__welcome">Welcome To Our Studio!</h2>
        <h3 className="landing-page__subtext">IT'S NICE TO MEET YOU</h3>
        <button className="btn-yellow" type="button">TELL ME MORE</button>
      </div>
      <div className="services-page">
        <h2 className="services-page__title">SERVICES</h2>
        <h1 className="services-page__sub-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="icons">
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">E-Commerce</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">Responsive Design</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-lock fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">Web Security</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <h2 className="services-page__title">PORTFOLIO</h2>
        <h1 className="services-page__sub-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="portfolio-images">
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
          <div className="portfolio-images__img" />
        </div>
      </div>
    </div>
  </div>
);

export default SecondPage;
