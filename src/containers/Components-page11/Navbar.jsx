import React, { Component } from "react";
import Scrollspy from "react-scrollspy";


import pic from "../images/nav-logo.png";

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
        <div className="navbar__empty" />
        <div className="navbar__brand-wrapper">
          <img src={pic} alt="logo" className="navbar__logo" />
          <a href="#top" className="navbar__logo-text">StartUp</a>
        </div>
        <div className="navbar__right-side">
          <button type="button" className="fas fa-bars nav-icon" onClick={this.showMenu} />
        </div>
        <div className="navbar__empty" />
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
            items={[
              "home", "services", "about", "team", "portfolio", "prices", "contact"
            ]}
            currentClassName="dropdown-menu__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "Services", href: "#services" },
              { value: "About", href: "#about" },
              { value: "Team", href: "#team" },
              { value: "Portfolio", href: "#portfolio" },
              { value: "Prices", href: "#prices" },
              { value: "Contact", href: "#contact" },
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
        <nav className="navbar__list">
          <Scrollspy
            style={{
              textAlign: "right",
              paddingLeft: "0",
            }}
            items={[
              "home", "services", "about", "team", "portfolio", "prices", "contact"
            ]}
            currentClassName="navbar__is-current"
          >
            {[
             { value: "Home", href: "#home" },
             { value: "Services", href: "#services" },
             { value: "About", href: "#about" },
             { value: "Team", href: "#team" },
             { value: "Portfolio", href: "#portfolio" },
             { value: "Prices", href: "#prices" },
             { value: "Contact", href: "#contact" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className="navbar__list-item">
                {navElement.value}
              </a>
            ))}
          </Scrollspy>
        </nav>
        <div className="navbar__empty" />
      </div>
    );
  }
}

export default Navbar;
