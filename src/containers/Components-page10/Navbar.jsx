import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

import logo from "../images/logo10.png";

class Navbar extends Component {
  state={
    showMenu: false,
  }

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
    const { scrolled } = this.props;
    return (
      <div className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
        <div className="navbar__brand-wrapper">
          <img src={logo} alt="logo" className="navbar__logo" />
        </div>
        <div className="navbar__right-side">
          <button type="button" className="fas fa-bars nav-icon" onClick={this.showMenu} />
        </div>
        <nav className="navbar__list">
          <Scrollspy
            style={{
              textAlign: "right",
              paddingLeft: "0",
            }}
            items={[
              "home", "about", "features", "screenshots", "clients", "packages", "download",
            ]}
            currentClassName="navbar--scrolled__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "About", href: "#about" },
              { value: "Features", href: "#features" },
              { value: "Screenshots", href: "#screenshots" },
              { value: "Clients", href: "#clients" },
              { value: "Packages", href: "#packages" },
              { value: "Download", href: "#download" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className="navbar__list-item">
                {navElement.value}
              </a>
            ))}
          </Scrollspy>
        </nav>
        <nav className={`menu ${showMenu ? "dropdown-menu" : "closed-menu"}`}>
          <Scrollspy
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 0",
              textAlign: "left",
              paddingLeft: "15px",
              margin: "0",
            }}
            items={["home", "about", "features", "screenshots", "clients", "packages", "download"]}
            currentClassName="dropdown-menu__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "About", href: "#about" },
              { value: "Features", href: "#features" },
              { value: "Screenshots", href: "#screenshots" },
              { value: "Clients", href: "#clients" },
              { value: "Packages", href: "#packages" },
              { value: "Download", href: "#download" },
            ].map(navElement => (
              <a
                href={navElement.href}
                key={navElement.value}
                className="dropdown-menu__list-item"
              >
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
