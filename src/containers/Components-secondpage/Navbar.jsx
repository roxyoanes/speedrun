import React from "react";

import "../../styles/second-page.scss";
import "../../styles/default.scss";

const Navbar = ({ scrolled }) => (
  <div className={scrolled ? "scrolled" : "navbar"}>
    <a className="start" href="#top">
              Start Bootstrap
    </a>
    <div className="navbar__right-side">
      <nav className="navbar__elements">
        <a href="#service">
          <button className="navbar__navbar-button" type="button">
                  SERVICES
          </button>
        </a>
        <a href="#portfolio">
          <button className="navbar__navbar-button" type="button">
                  PORTFOLIO
          </button>
        </a>
        <a href="#about">
          <button className="navbar__navbar-button" type="button">
                  ABOUT
          </button>
        </a>
        <a href="#team">
          <button className="navbar__navbar-button" type="button">
                  TEAM
          </button>
        </a>
        <a href="#contact">
          <button className="navbar__navbar-button" type="button">
                  CONTACT
          </button>
        </a>
      </nav>
    </div>
  </div>
);

export default Navbar;
