import React, { Component, createRef } from "react";
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
import "../styles/page6-contact.scss";
import "../styles/page6-portfolio.scss";
import "../styles/page5-gallery.scss";
import "../styles/page6-about.scss";
import { Page6navbar1, Subfooter, Footer } from "./Sections-page6";
import logo6 from "./images/logo6.png";

class Page6 extends Component {
  state = {
    showMenu: false,
    scrolled: false,
    aboutMenu: false,
  };

  myRef = createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction, true);
  }

  scrollFunction = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = (event) => {
    if (this.myRef && this.myRef.current.contains(event.target)) {
      return;
    }
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  aboutMenu = (event) => {
    event.preventDefault();
    this.setState({ aboutMenu: true }, () => {
      document.addEventListener("click", this.closeAboutMenu);
    });
  };

  closeAboutMenu = () => {
    this.setState({ aboutMenu: false }, () => {
      document.removeEventListener("click", this.closeAboutMenu);
    });
  };

  render() {
    const { match } = this.props;
    const { showMenu, scrolled, aboutMenu } = this.state;
    return (
      <div className="page6">
        <div className="container">
          <div className="navbar">
            <a href="#top" className="navbar__logo">
              <img src={logo6} className="navbar__img" alt="logo" />
            </a>
            <Page6navbar1 match={match} />
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
              <Link to={`${match.path}/`} className="dropdown-menu__list-item">
                Home
              </Link>
              <button
                ref={this.myRef}
                className="dropdown-menu__list-item"
                onClick={this.aboutMenu}
                type="button"
              >
                About
                <span className="dropdown-menu__list-item__caret" />
              </button>
              <nav className={`menu ${aboutMenu ? "about-opened" : "about-closed"}`}>
                <Link to={`${match.path}/about`}>
                  <h3 className="about-opened__item">COMPANY</h3>
                </Link>
                <Link to={`${match.path}/about`}>
                  <h3 className="about-opened__item">OUR TEAM</h3>
                </Link>
                <Link to={`${match.path}/about`}>
                  <h3 className="about-opened__item">NEWS</h3>
                </Link>
                <Link to={`${match.path}/about`}>
                  <h3 className="about-opened__item">INVESTORS</h3>
                </Link>
              </nav>
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
          <Route path={`${match.path}/about`} component={About} />
          <Route path={`${match.path}/services`} component={Services} />
          <Route path={`${match.path}/portfolio`} component={Portfolio} />
          <Route path={`${match.path}/pricing`} component={Pricing} />
          <Route path={`${match.path}/contact`} component={Contact} />
          <Route exact path={`${match.path}/`} component={First} />
          <Subfooter />
          <Footer />
          <div>
            <a href="#top" className={scrolled ? "button-scroll" : "scrolled"}>
              <i className="fas fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Page6;
