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
                to={`${match.path}/`}
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
          <Route path={`${match.path}/about`} component={About} />
          <Route path={`${match.path}/services`} component={Services} />
          <Route path={`${match.path}/portfolio`} component={Portfolio} />
          <Route path={`${match.path}/pricing`} component={Pricing} />
          <Route path={`${match.path}/contact`} component={Contact} />
          <Route exact path={`${match.path}/`} component={First} />
          <div className="subfooter">
            <div className="subfooter__contact">
              <h5 className="subfooter__title">Our Contact</h5>
              <strong>Bootstrap company Inc.</strong>
              <br />
              JC Main Road, Near Silnile tower
              <br />
              Pin-21542 NewYork US.
              <div className="subfooter__details">
                <p className="subfooter__p">(123) 456-789 - 1255-12584 </p>
                <p className="subfooter__p">email@domainname.com</p>
              </div>
            </div>
            <div className="subfooter__links">
              <h5 className="subfooter__title">Quick Links</h5>
              <div className="subfooter__list">
                <a href="#top" className="subfooter__item">Latest Events</a>
                <a href="#top" className="subfooter__item">Terms and Conditions</a>
                <a href="#top" className="subfooter__item">Privacy Policy</a>
                <a href="#top" className="subfooter__item">Career</a>
                <a href="#top" className="subfooter__item">Contact us</a>
              </div>
            </div>
            <div className="subfooter__posts">
              <h5 className="subfooter__title">Latest Posts</h5>
              <div className="subfooter__list">
                <a href="#top" className="subfooter__item">Lorem ipsum dolor met consectetur adipisicing. Aorem psum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</a>
                <a href="#top" className="subfooter__item">Pellentesque et pulvinar enim. Quisque at tempor ligula</a>
                <a href="#top" className="subfooter__item">Natus error sit voluptatem accusantium doloremque</a>
              </div>
            </div>
            <div className="subfooter__news">
              <h5 className="subfooter__title">Recent News</h5>
              <div className="subfooter__list">
                <a href="#top" className="subfooter__item">Lorem ipsum dolor met consectetur adipisicing. </a>
                <a href="#top" className="subfooter__item">Pellentesque et pulvinar enim. Quisque at tempor ligula</a>
                <a href="#top" className="subfooter__item">Natus error sit voluptatem accusantium doloremque</a>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer__copyright">
              <p>
                <span>© Bootstrap Template 2017 All right reserved. Template By</span>
                <a href="http://webthemez.com/free-bootstrap-templates/" className="footer__website">WebThemez</a>
              </p>
            </div>
            <span className="footer__icons-list">
              <i className="fab fa-twitter footer-icon" />
              <i className="fab fa-facebook footer-icon" />
              <i className="fab fa-linkedin footer-icon" />
              <i className="fab fa-pinterest footer-icon" />
              <i className="fab fa-google-plus footer-icon" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Page6;
