import React from "react";

import "../styles/third-page.scss";
import "../styles/default-third.scss";

const ThirdPage = () => (
  <div className="third-page">
    <div className="container">
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
    </div>
  </div>
);

export default ThirdPage;
