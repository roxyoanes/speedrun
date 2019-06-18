import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link to={`${match.path}/home`} className="navbar__list-item">
          Home
        </Link>
        <button
          type="button"
          className="navbar__list-item"
          onClick={this.aboutMenu}
        >
          About
          <span className="navbar__list-item__caret" />
        </button>
        <nav className={`menu ${aboutMenu ? "about-opened" : "about-closed"}`}>
          <Link to={`${match.path}/about`} className="about-opened__link-about">
            <a href="#top" className="about-opened__item">
              COMPANY
            </a>
          </Link>
          <Link to={`${match.path}/about`} className="about-opened__link-about">
            <a href="#top" className="about-opened__item">
              OUR TEAM
            </a>
          </Link>
          <Link to={`${match.path}/about`} className="about-opened__link-about">
            <a href="#top" className="about-opened__item">
              NEWS
            </a>
          </Link>
          <Link to={`${match.path}/about`} className="about-opened__link-about">
            <a href="#top" className="about-opened__item">
              INVESTORS
            </a>
          </Link>
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

export default Page6navbar1;
