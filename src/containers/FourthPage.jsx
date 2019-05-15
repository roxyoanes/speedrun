import React from "react";

import "../styles/fourth-page.scss";

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
            <p className="card-3__description">
              I mustache you a question...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FourthPage;
