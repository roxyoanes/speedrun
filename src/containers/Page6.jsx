import React from "react";
import { Route, Link } from "react-router-dom";

import {
  First, About, Services, Portfolio, Pricing, Contact,
} from "./Components-page6";
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
      <Link to={`${match.path}/home`}>Home</Link>
      <Route path={`${match.path}/about`} component={About} />
      <Link to={`${match.path}/about`}>About</Link>
      <Route path={`${match.path}/services`} component={Services} />
      <Link to={`${match.path}/services`}>Services</Link>
      <Route path={`${match.path}/portfolio`} component={Portfolio} />
      <Link to={`${match.path}/portfolio`}>Portfolio</Link>
      <Route path={`${match.path}/pricing`} component={Pricing} />
      <Link to={`${match.path}/pricing`}>Pricing</Link>
      <Route path={`${match.path}/contact`} component={Contact} />
      <Link to={`${match.path}/contact`}>Contact</Link>
    </div>
  </div>
);

export default Page6;
