import React from "react";

import logonavbar5 from "./images/logonavbar5.png";

const Page5 = () => (
  <div className="page5">
    <div className="container">
      <div className="navbar">
        <a href="#top" className="navbar__logo">
          <img src={logonavbar5} className="navbar__logo-img" alt="logo" />
        </a>
        <div className="navbar__right-side">
          <a href="#top" className="navbar__list-item">HOME</a>
          <a href="#top" className="navbar__list-item">ABOUT US</a>
          <a href="#top" className="navbar__list-item">SERVICES</a>
          <a href="#top" className="navbar__list-item">PORTFOLIO</a>
          <a href="#top" className="navbar__list-item">TEAM</a>
          <a href="#top" className="navbar__list-item">CONTACT</a>
        </div>
      </div>
    </div>
  </div>
);

export default Page5;
