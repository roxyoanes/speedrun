import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

import person2 from "../images/person2.jpg";

class Navbar extends Component {
  state = {
    showMenu: false,
  };

  componentDidMount() {
    document.querySelector("html").classList.add("smooth-scroll");
  }

  componentWillUnmount() {
    document.querySelector("html").classList.remove("smooth-scroll");
  }

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
    const { showMenu } = this.state;
    return (
      <div className="navbar">
        <a className="navbar__left" href="#top">
          Clarence Taylor
        </a>
        <a className="navbar__pic-container" href="#top">
          <img className="navbar__pic" src={person2} alt="person" />
        </a>
        <nav className="navbar__list">
          <Scrollspy
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0",
              margin: "0",
            }}
            items={[
              "about",
              "experience",
              "education",
              "skills",
              "interests",
              "awards",
            ]}
            currentClassName="navbar__is-current"
          >
            <a href="#about" className="navbar__item">
              ABOUT
            </a>
            <a href="#experience" className="navbar__item">
              EXPERIENCE
            </a>
            <a href="#education" className="navbar__item">
              EDUCATION
            </a>
            <a href="#skills" className="navbar__item">
              SKILLS
            </a>
            <a href="#interests" className="navbar__item">
              INTERESTS
            </a>
            <a href="#awards" className="navbar__item">
              AWARDS
            </a>
          </Scrollspy>
        </nav>
        <div className="navbar__right">
          <button
            type="button"
            className="button-menu "
            onClick={this.showMenu}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        {showMenu ? (
          <nav className="dropdown">
            <a href="#about">
              <button type="button" className="dropdown-item ">
                ABOUT
              </button>
            </a>
            <a href="#experience">
              <button type="button" className="dropdown-item ">
                EXPERIENCE
              </button>
            </a>
            <a href="#education">
              <button type="button" className="dropdown-item">
                EDUCATION
              </button>
            </a>
            <a href="#skills">
              <button type="button" className="dropdown-item">
                SKILLS
              </button>
            </a>
            <a href="#interests">
              <button type="button" className="dropdown-item">
                INTERESTS
              </button>
            </a>
            <a href="#awards">
              <button type="button" className="dropdown-item">
                AWARDS
              </button>
            </a>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
