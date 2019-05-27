import React, { Component } from "react";

import logonavbar5 from "../images/logonavbar5.png";

class Navbar extends Component {
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
    const { showMenu } = this.state;
    return (
      <div className="navbar">
        <a href="#top" className="navbar__logo">
          <img src={logonavbar5} className="navbar__logo-img" alt="logo" />
        </a>
        <div className="navbar__right-side">
          <button
            onClick={this.showMenu}
            className="navbar-button"
            type="button"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        {showMenu ? (
          <nav className="dropdown">
            {[
              { value: "HOME", href: "#top" },
              { value: "ABOUT US", href: "#top" },
              { value: "SERVICES", href: "#top" },
              { value: "PORTFOLIO", href: "#top" },
              { value: "TEAM", href: "#top" },
              { value: "CONTACT", href: "#top" }
            ].map(navElement => (
              <a href={navElement.href} className="navbar__list-item">
                {navElement.value}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
