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
    const { showMenu } = this.state;
    return (
      <div className="navbar">
        <a className="navbar__left" href="#top">
          Clarence Taylor
        </a>
        <div className="navbar__right">
          <button type="button" className="button-menu " onClick={this.showMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
        {
          showMenu ? (
            <nav className="menu">
              <a href="#about">
                <button type="button" className="menu-button">ABOUT</button>
              </a>
              <a href="#experience">
                <button type="button" className="menu-button">EXPERIENCE</button>
              </a>
              <a href="#education">
                <button type="button" className="menu-button">EDUCATION</button>
              </a>
              <a href="#skills">
                <button type="button" className="menu-button">SKILLS</button>
              </a>
              <a href="#interests">
                <button type="button" className="menu-button">INTERESTS</button>
              </a>
              <a href="#awards">
                <button type="button" className="menu-button">AWARDS</button>
              </a>
            </nav>
          )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Navbar;
