import React from 'react';

import '../styles/second-page.scss';

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
    </div>
  </div>
);

export default SecondPage;
