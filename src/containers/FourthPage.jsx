import React from "react";

import "../styles/fourth-page.scss";
import port1 from "./images/port1.jpg";
import port2 from "./images/port2.jpg";
import port3 from "./images/port3.jpg";
import card4pr4 from "./images/card4pr4.jpg";

const FourthPage = () => (
  <div className="fourth-page">
    <div className="container">
      <div className="image">
        <div className="navbar">
          <button type="button" className="button-menu">
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="card-1">
          <div className="card-1__container">
            <h1 className="card-1__heading">Stylish Portfolio</h1>
            <h3 className="card-1__subheading">
              A Free Bootstrap Theme by Start Bootstrap
            </h3>
            <a href="#top" className="card-1__button-wrapper">
              <button type="button" className="button-card">
                Find Out More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="card-2__container">
          <h2 className="card-2__subheading">
            Stylish Portfolio is the perfect theme for your next project!
          </h2>
          <p className="card-2__description">
            This theme features a flexible, UX friendly sidebar menu and stock
            photos from our friends at
            <a href="https://unsplash.com/" className="link-website">
              Unsplash
            </a>
            !
          </p>
          <a href="#top" className="button-card button-card--color">
            What We Offer
          </a>
        </div>
      </div>
      <div className="card-3">
        <div className="card-3__heading">
          <h3 className="card-3__text-services">SERVICES</h3>
          <h2 className="card-3__subheading">What We Offer</h2>
        </div>
        <div className="card-3__icons-sections">
          <div className="card-3__section">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-mobile-alt fa-stack-1x fa-inverse item" />
            </span>
            <h4 className="card-3__property">Responsive</h4>
            <p className="card-3__description">
              Looks great on any screen size!
            </p>
          </div>
        </div>
        <div className="card-3__icons-sections">
          <div className="card-3__section">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-pencil-alt fa-stack-1x fa-inverse item" />
            </span>
            <h4 className="card-3__property">Redesigned</h4>
            <p className="card-3__description">
              Freshly redesigned for Bootstrap 4!
            </p>
          </div>
        </div>
        <div className="card-3__icons-sections">
          <div className="card-3__section">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-thumbs-up fa-stack-1x fa-inverse item" />
            </span>
            <h4 className="card-3__property">Favorited</h4>
            <p className="card-3__description">
              Millions of users
              <i className="fas fa-heart" />
              Start Bootstrap!
            </p>
          </div>
        </div>
        <div className="card-3__icons-sections">
          <div className="card-3__section">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-question fa-stack-1x fa-inverse item" />
            </span>
            <h4 className="card-3__property">Question</h4>
            <p className="card-3__description">I mustache you a question...</p>
          </div>
        </div>
      </div>
      <div className="card-4">
        <div className="card-4__container">
          <h2 className="card-4__subheading">
            Welcome to
            <em>your</em>
            next website!
          </h2>
          <a href="#top" className="button-card">
            Download Now!
          </a>
        </div>
      </div>
      <div className="card-5">
        <div className="card-5__container">
          <h3 className="card-5__portfolio">PORTFOLIO</h3>
          <h2 className="card-5__subheading">Recent Projects</h2>
        </div>
        <div className="captions">
          <div className="captions__card">
            <div className="captions__overlay" />
            <div className="captions__text">
              <h2 className="captions__title">STATIONARY</h2>
              <p className="captions__p">
                A yellow pencil with envelops on a clean, blue backdrop!
              </p>
            </div>
            <img src={port1} className="captions__img" alt="img" />
          </div>
          <div className="captions__card">
            <div className="captions__overlay" />
            <div className="captions__text">
              <h2 className="captions__title">ICE CREAM</h2>
              <p className="captions__p">
                A dark blue background with a colored pencil, a clip, and a tiny
                ice cream cone!
              </p>
            </div>

            <img src={port2} className="captions__img" alt="img" />
          </div>
          <div className="captions__card">
            <div className="captions__overlay" />
            <div className="captions__text">
              <h2 className="captions__title">STRAWBERRIES</h2>
              <p className="captions__p">
                Strawberries are such a tasty snack, especially with a little
                sugar on top
              </p>
            </div>
            <img src={port3} className="captions__img" alt="img" />
          </div>
          <div className="captions__card">
            <div className="captions__overlay" />
            <div className="captions__text">
              <h2 className="captions__title">WORKSPACE</h2>
              <p className="captions__p">
                A yellow workspace with some scissors, pencils, and other
                objects.
              </p>
            </div>
            <img src={card4pr4} className="captions__img" alt="img" />
          </div>
        </div>
      </div>
      <div className="card-6">
        <div className="card-6__container">
          <h2 className="card-6__subheading">
            The buttons below are impossible to resist...
          </h2>
          <a href="#top" className="button-card button-card--white">
            Click Me!
          </a>
          <a href="#top" className="button-card button-card--color">
            Look At Me!
          </a>
        </div>
      </div>
      <div className="card-7">
        <div><iframe title="map" width="100%" height="250" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=37.7767817,-122.4167923&amp;q=1355%20Market%20St%20%23900%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA+(map)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" /></div>
      </div>
    </div>
  </div>
);

export default FourthPage;
