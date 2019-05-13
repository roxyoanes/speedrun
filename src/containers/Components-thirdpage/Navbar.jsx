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
            <nav className="dropdown">
              <a href="#about">
                <button type="button" className="dropdown-item ">ABOUT</button>
              </a>
              <a href="#experience">
                <button type="button" className="dropdown-item ">EXPERIENCE</button>
              </a>
              <a href="#education">
                <button type="button" className="dropdown-item">EDUCATION</button>
              </a>
              <a href="#skills">
                <button type="button" className="dropdown-item">SKILLS</button>
              </a>
              <a href="#interests">
                <button type="button" className="dropdown-item">INTERESTS</button>
              </a>
              <a href="#awards">
                <button type="button" className="dropdown-item">AWARDS</button>
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
