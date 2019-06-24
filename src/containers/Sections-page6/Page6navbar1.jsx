import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Page6navbar1 extends Component {
  state = {
    aboutMenu: false,
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
    const { aboutMenu } = this.state;
    return (
      <nav className="navbar__list">
        <Link to={`${match.path}/`} className="navbar__list-item">
          Home
        </Link>
        <nav className="navbar__btn-menu-wrapper">
          <button
            type="button"
            className="navbar__list-item-btn"
            onClick={this.aboutMenu}
          >
            About
            <i className="navbar__list-item__caret" />
          </button>
          <nav
            className={`menu ${aboutMenu ? "about-opened" : "about-closed"}`}
          >
            <Link
              to={`${match.path}/about`}
              className="about-opened__link-about"
            >
              COMPANY
            </Link>
            <Link
              to={`${match.path}/about`}
              className="about-opened__link-about"
            >
              OUR TEAM
            </Link>
            <Link
              to={`${match.path}/about`}
              className="about-opened__link-about"
            >
              NEWS
            </Link>
            <Link
              to={`${match.path}/about`}
              className="about-opened__link-about"
            >
              INVESTORS
            </Link>
          </nav>
        </nav>
        <Link to={`${match.path}/services`} className="navbar__list-item">
          Services
        </Link>
        <Link to={`${match.path}/portfolio`} className="navbar__list-item">
          Portfolio
        </Link>
        <Link to={`${match.path}/pricing`} className="navbar__list-item">
          Pricing
        </Link>
        <Link to={`${match.path}/contact`} className="navbar__list-item">
          Contact
        </Link>
      </nav>
    );
  }
}
Page6navbar1.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Page6navbar1;
