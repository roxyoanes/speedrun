import React from 'react';
import water from './images/water.jpg';

const Home = () => (
  <div className="container">
    <div className="navbar">
      <div className="navbar-brand">Start Bootstrap</div>
      <button className="sign-in" type="button">Sign In</button>
    </div>
    <div className="text-middle">
      <div className="enter-email">
        <img className="water.jpg" alt="water" src={water} />
        <input type="text" />
        <button className="sign-up" type="button">Sign up</button>
      </div>
    </div>
    <div className="icons">
      <div className="icon1" />
      <div className="icon2" />
      <div className="icon3" />
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
