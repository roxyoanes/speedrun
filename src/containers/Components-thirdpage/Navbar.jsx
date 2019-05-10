import React from "react";

const Navbar = () => (
  <div className="navbar">
    <a className="navbar__left" href="#top">
      Clarence Taylor
    </a>
    <div className="navbar__right">
      <button type="button" className="button-menu">
        <i className="fas fa-bars" />
      </button>
    </div>
  </div>
);

export default Navbar;

