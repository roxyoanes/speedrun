import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import {
  First,
  About,
  Services,
  Portfolio,
  Pricing,
  Contact,
} from "./Components-page6";
import "../styles/page6.scss";

import logo6 from "./images/logo6.png";

class Page6 extends Component {
  state = {
    showMenu: false,
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  render() {
    const { match } = this.props;
    const { showMenu } = this.state;
    return (
      <div className="page6">
        <div className="container">
          <div className="navbar">
            <a href="#top" className="navbar__logo">
              <img src={logo6} className="narvar__img" alt="logo" />
            </a>
            <nav className="navbar__list">
              <Link to={`${match.path}/home`} className="navbar__list-item">
                Home
              </Link>
              <Link to={`${match.path}/about`} className="navbar__list-item">
                About
                <span className="navbar__list-item__caret" />
              </Link>
              <Link to={`${match.path}/services`} className="navbar__list-item">
                Services
              </Link>
              <Link
                to={`${match.path}/portfolio`}
                className="navbar__list-item"
              >
                Portfolio
              </Link>
              <Link to={`${match.path}/pricing`} className="navbar__list-item">
                Pricing
              </Link>
              <Link to={`${match.path}/contact`} className="navbar__list-item">
                Contact
              </Link>
            </nav>
            <div className="navbar__right-side">
              <button
                type="button"
                onClick={this.showMenu}
                className="navbar-btn"
              >
                <i className="fas fa-bars" />
              </button>
            </div>
            <nav
              className={`menu ${showMenu ? "dropdown-menu" : "menu-closed"}`}
            >
              <Link
                to={`${match.path}/home`}
                className="dropdown-menu__list-item"
              >
                Home
              </Link>
              <Link
                to={`${match.path}/about`}
                className="dropdown-menu__list-item"
              >
                About
                <span className="dropdown-menu__list-item__caret" />
              </Link>
              <Link
                to={`${match.path}/services`}
                className="dropdown-menu__list-item"
              >
                Services
              </Link>
              <Link
                to={`${match.path}/portfolio`}
                className="dropdown-menu__list-item"
              >
                Portfolio
              </Link>
              <Link
                to={`${match.path}/pricing`}
                className="dropdown-menu__list-item"
              >
                Pricing
              </Link>
              <Link
                to={`${match.path}/contact`}
                className="dropdown-menu__list-item"
              >
                Contact
              </Link>
            </nav>
          </div>
          <Route path={`${match.path}/home`} component={First} />
          <Route path={`${match.path}/about`} component={About} />
          <Route path={`${match.path}/services`} component={Services} />
          <Route path={`${match.path}/portfolio`} component={Portfolio} />
          <Route path={`${match.path}/pricing`} component={Pricing} />
          <Route path={`${match.path}/contact`} component={Contact} />
        </div>
      </div>
    );
  }
}

export default Page6;
