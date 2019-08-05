import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import PropTypes from "prop-types";

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
    const { scrolled } = this.props;
    return (
      <div className={scrolled ? "scrolled" : "navbar"}>
        <div className={scrolled ? "scrolled__brand-wrapper" : "navbar__brand-wrapper"}>
          <a href="#top" className={scrolled ? "scrolled__brand" : "navbar__brand"}>LOOKUP</a>
        </div>
        <div className="navbar__right-side">
          {showMenu ? (
            <button type="button" className="fas fa-times nav-icon" onClick={this.showMenu} />
          ) : (
            <button type="button" className="fas fa-bars nav-icon" onClick={this.showMenu} />
          )}
        </div>
        <nav className={scrolled ? "scrolled__list" : "navbar__list"}>
          <Scrollspy
            items={[
              "home", "services", "about", "gallery", "our team", "testimonials", "contact",
            ]}
            currentClassName={scrolled ? "scrolled__is-current" : "navbar__is-current"}
          >
            {[
              { value: "Home", href: "#home" },
              { value: "Services", href: "#services" },
              { value: "About", href: "#about" },
              { value: "Gallery", href: "#gallery" },
              { value: "Our Team", href: "#team" },
              { value: "Testimonials", href: "#testimonials" },
              { value: "Contact", href: "#contact" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className={scrolled ? "scrolled__list-item" : "navbar__list-item"}>
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
              alignItems: "center",
            }}
            items={["home", "services", "about", "gallery", "our team", "testimonials", "contact"]}
            currentClassName="dropdown-menu__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "Services", href: "#services" },
              { value: "About", href: "#about" },
              { value: "Gallery", href: "#gallery" },
              { value: "Our Team", href: "#ourteam" },
              { value: "Testimonials", href: "#testimonials" },
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
Navbar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default Navbar;
