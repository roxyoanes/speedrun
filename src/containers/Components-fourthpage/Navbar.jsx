import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  state = {
    showMenu: false
  };

  showMenu = event => {
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
        <button onClick={this.showMenu} type="button" className="button-menu">
          <i className="fas fa-bars" />
        </button>
        {showMenu ? (
          <nav className="menu-drop">
            <div className="menu-drop__header">
              <a href="#top" className="menu-drop__heading">
                Start Bootstrap
              </a>
            </div>
            <div className="menu-drop__list">
              <a href="'top" className="menu-drop__item">
                Home
              </a>
              <a href="'top" className="menu-drop__item">
                About
              </a>
              <a href="'top" className="menu-drop__item">
                Services
              </a>
              <a href="'top" className="menu-drop__item">
                Portfolio
              </a>
            </div>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
