import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

class Navbar extends Component {
  state= {
    showMenu: false,
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
    return(
      <div className={scrolled ? "fixed" : "navbar"}>
        <div className="navbar__right-side">
          <button type="button" className="fas fa-bars nav-icon" onClick={this.showMenu} />
        </div>
        <nav className="navbar__list">
          <Scrollspy
            items={[
              "home", "about", "services", "menu", "gallery", "testimonial", "contact",
            ]}
            currentClassName="navbar__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "About Us", href: "#about" },
              { value: "Services", href: "#services" },
              { value: "Menu Card", href: "#menu" },
              { value: "Gallery", href: "#gallery" },
              { value: "Testimonial", href: "#testimonial" },
              { value: "Contact", href: "#contact" },
            ].map(navElement => (
              <a href={navElement.href} key={navElement.value} className="navbar__list-item">
                {navElement.value}
              </a>
            ))}
          </Scrollspy>
        </nav>
        <nav className={`${showMenu ? "dropdown-menu" : "closed-menu"}`}>
          <Scrollspy
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0",
              alignItems: "center",
              margin: "0",
            }}
            items={["home", "about", "services", "menu", "gallery", "testimonial", "contact"]}
            currentClassName="dropdown-menu__is-current"
          >
            {[
              { value: "Home", href: "#home" },
              { value: "About Us", href: "#about" },
              { value: "Services", href: "#services" },
              { value: "Menu Card", href: "#menu" },
              { value: "Gallery", href: "#gallery" },
              { value: "Testimonial", href: "#testimonial" },
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
