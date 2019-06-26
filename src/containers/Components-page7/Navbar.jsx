import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

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
        <a href="#top" className="navbar__brand">
          Start Bootstrap
        </a>
        <div className="navbar__right-side">
          <button type="button" className="navbar-btn" onClick={this.showMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
        <nav className="navbar__list">
          <Scrollspy
            items={[
              "about",
              "services",
              "portfolio",
              "contact",
            ]}
            currentClassName="navbar__is-current"
          >
            {[
              { value: "About", href: "#about" },
              { value: "Services", href: "#services" },
              { value: "Portfolio", href: "#portfolio" },
              { value: "Contact", href: "#contact" },
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
              padding: "0",
              alignItems: "flexStart",
            }}
            items={["about", "services", "portfolio", "contact"]}
            currentClassName="dropdown-menu__is-current"
          >
            {[
              { value: "About", href: "#about" },
              { value: "Services", href: "#services" },
              { value: "Portfolio", href: "#portfolio" },
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
      </div>
    );
  }
}

export default Navbar;
