import React from "react";

const Card3 = () => (
  <div className="card-3" id="services">
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
        <p className="card-3__description">Looks great on any screen size!</p>
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
);

export default Card3;
