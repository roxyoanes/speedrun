import React from "react";
import { Route, Link } from "react-router-dom";

import { First } from "./Components-page6";
import "../styles/page6.scss";

import logo6 from "./images/logo6.png";

const Page6 = ({ match }) => (
  <div className="page6">
    <div className="container">
      <div className="navbar">
        <a href="#top" className="navbar__logo">
          <img src={logo6} className="narvar__img" alt="logo" />
        </a>
        <div className="navbar__right-side">
          <button type="button" className="navbar-btn">
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
      <Route path={`${match.path}/home`} component={First} />
      <Link to={`${match.path}/home`}>heheha</Link>
    </div>
  </div>
);

export default Page6;
