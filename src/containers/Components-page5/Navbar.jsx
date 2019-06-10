import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

import logonavbar5 from "../images/logonavbar5.png";

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
        <a href="#top" className="navbar__logo">
          <img src={logonavbar5} className="navbar__logo-img" alt="logo" />
        </a>
        <nav className="navbar__list">
          <Scrollspy
            items={[
              "top",
              "about",
              "services",
              "portfolio",
              "team",
              "contact",
            ]}
            currentClassName="navbar__is-current"
          >
            {[
              { value: "HOME", href: "#top" },
              { value: "ABOUT US", href: "#about" },
              { value: "SERVICES", href: "#services" },
              { value: "PORTFOLIO", href: "#portfolio" },
              { value: "TEAM", href: "#team" },
              { value: "CONTACT", href: "#contact" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className="navbar__list-item">
                {navElement.value}
              </a>
            ))}
          </Scrollspy>
        </nav>
        <div className="navbar__right-side">
          <button
            onClick={this.showMenu}
            className="navbar-button"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <nav className={`menu ${showMenu ? "dropdown" : "menu-closed"}`}>
          <Scrollspy
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0",
              alignItems: "center",
            }}
            items={[
              "top",
              "about",
              "services",
              "portfolio",
              "team",
              "contact",
            ]}
            currentClassName="dropdown__is-current"
          >
            {[
              { value: "HOME", href: "#top" },
              { value: "ABOUT US", href: "#about" },
              { value: "SERVICES", href: "#services" },
              { value: "PORTFOLIO", href: "#portfolio" },
              { value: "TEAM", href: "#team" },
              { value: "CONTACT", href: "#contact" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className="dropdown__list-item">
                {navElement.value}
              </a>
            ))}
          </Scrollspy>
        </nav>
      </div>
    );
  }
}

export default Navbar;
