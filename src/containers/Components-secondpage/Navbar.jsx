import React from "react";

const Navbar = ({ scrolled }) => (
  <div className={scrolled ? "scrolled" : "navbar"}>
    <a className="start" href="#top">
      Start Bootstrap
    </a>
    <div className="navbar__right-side">
      <button type="button" className="button button--menu tablet">
        MENU
        <i className="fas fa-bars" />
      </button>
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
