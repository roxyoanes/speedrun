import React from 'react';

import '../../styles/second-page.scss';
import '../../styles/default.scss';

const Navbar = () => (
  <div className="navbar">
    <a className="start" href="#top">
              Start Bootstrap
    </a>
    <div className="navbar__right-side">
      <nav className="navbar__elements">
        <button className="navbar__navbar-button" type="button">
                  SERVICES
        </button>
        <button className="navbar__navbar-button" type="button">
                  PORTFOLIO
        </button>
        <button className="navbar__navbar-button" type="button">
                  ABOUT
        </button>
        <button className="navbar__navbar-button" type="button">
                  TEAM
        </button>
        <button className="navbar__navbar-button" type="button">
                  CONTACT
        </button>
      </nav>
    </div>
  </div>
);

export default Navbar;
