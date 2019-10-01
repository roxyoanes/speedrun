import React, { Component } from "react";

import pic from "../images/nav-logo.png";

class Navbar extends Component {
  state={
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__brand-wrapper">
          <img src={pic} alt="logo" className="navbar__logo" />
          <a href="#top" className="navbar__logo-text">StartUp</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
