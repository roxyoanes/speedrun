import React from 'react';

const Home = () => (
  <div className="container">
    <div className="navbar">
      <div className="navbar-brand">Start Bootstrap</div>
      <button className="sign-in" type="button">Sign In</button>
    </div>
    <div className="water-card">
      <div className="text-input">
        <h1 className="text">Build a landing page for  your business or project and generate more leads!</h1>
        <input className="email" type="text" placeholder="Enter you email..." />
        <button className="sign-up" type="button">Sign up!</button>
      </div>
    </div>
    <div className="icons">
      <div className="first-card">
        <i className="fas fa-desktop" />
        <h1>Full Responsive</h1>
        <h2>This theme will look great on any device, no matter the size!</h2>
      </div>
      <div className="second-card">
        <i className="fas fa-layer-group" />
        <h1>Full Responsive</h1>
        <h2>This theme will look great on any device, no matter the size!</h2>
      </div>
      <div className="third-card">
        <i className="far fa-check-circle" />
        <h1>Full Responsive</h1>
        <h2>This theme will look great on any device, no matter the size!</h2>
      </div>
    </div>
    <div className="cards-img" />
    <div className="people-img" />
    <div className="sign-up2">
      <input type="text" />
      <button className="sign-up2" type="button">Sign up</button>
    </div>
    <div className="footer" />
  </div>
);

export default Home;
