import React, { Component } from "react";

class Navbar extends Component {
  state={
    showMenu: false,
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    const { scrolled } = this.props;
    const { showMenu } = this.state;
    return (
      <div className={scrolled ? "scrolled" : "navbar"}>
        <a className="start" href="#top">
          Start Bootstrap
        </a>
        <div className="navbar__right-side">
          <button onClick={this.showMenu} type="button" className="button button--menu tablet">
            MENU
            <i className="fas fa-bars" />
          </button>
          <nav className="navbar__elements">
            <a href="#service">
              <button className="navbar__navbar-button" type="button">
                  SERVICES
              </button>
            </a>
            <a href="#portfolio">
              <button className="navbar__navbar-button" type="button">
                  PORTFOLIO
              </button>
            </a>
            <a href="#about">
              <button className="navbar__navbar-button" type="button">
                  ABOUT
              </button>
            </a>
            <a href="#team">
              <button className="navbar__navbar-button" type="button">
                  TEAM
              </button>
            </a>
            <a href="#contact">
              <button className="navbar__navbar-button" type="button">
                  CONTACT
              </button>
            </a>
          </nav>
          {
            showMenu ? (
              <nav className="menu__drop">
                <a href="#service">
                  <button className="menu__menu-button" type="button">
                  SERVICES
                  </button>
                </a>
                <a href="#portfolio">
                  <button className="menu__menu-button" type="button">
                  PORTFOLIO
                  </button>
                </a>
                <a href="#about">
                  <button className="menu__menu-button" type="button">
                  ABOUT
                  </button>
                </a>
                <a href="#team">
                  <button className="menu__menu-button" type="button">
                  TEAM
                  </button>
                </a>
                <a href="#contact">
                  <button className="menu__menu-button" type="button">
                  CONTACT
                  </button>
                </a>
              </nav>
            )
              : (
                null
              )
          }

        </div>
      </div>
    );
  }
}

export default Navbar;
