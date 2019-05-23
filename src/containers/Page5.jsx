import React from "react";

import "../styles/page5.scss";
import logonavbar5 from "./images/logonavbar5.png";

const Page5 = () => (
  <div className="page5">
    <div className="container">
      <div className="navbar">
        <a href="#top" className="navbar__logo">
          <img src={logonavbar5} className="navbar__logo-img" alt="logo" />
        </a>
        <div className="navbar__right-side">
          <button className="navbar-button" type="button">
            <i className="fas fa-bars" />
          </button>
          <nav className="navbar__elements">
            <a href="#top" className="navbar__list-item">
              HOME
            </a>
            <a href="#top" className="navbar__list-item">
              ABOUT US
            </a>
            <a href="#top" className="navbar__list-item">
              SERVICES
            </a>
            <a href="#top" className="navbar__list-item">
              PORTFOLIO
            </a>
            <a href="#top" className="navbar__list-item">
              TEAM
            </a>
            <a href="#top" className="navbar__list-item">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Page5;
