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
        <button onClick={this.showMenu} type="button" className="button-menu">
          {showMenu ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>
        <nav className={`menu ${showMenu ? "menu-drop" : "menu-closed"}`} id="active">
          <Scrollspy
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0",
              paddingLeft: "0",
            }}
            items={[
              "Start Bootstrap",
              "Home",
              "About",
              "Services",
              "Portfolio",
            ]}
            currentClassName="is-current"
          >
            <div className="menu__header">
              <a href="#top" className="menu__heading">
                Start Bootstrap
              </a>
            </div>
            <div className="menu__list">
              <a href="#top" className="menu__item">
                Home
              </a>
              <a href="#about" className="menu__item">
                About
              </a>
              <a href="#services" className="menu__item">
                Services
              </a>
              <a href="#portfolio" className="menu__item">
                Portfolio
              </a>
            </div>
          </Scrollspy>
        </nav>
      </div>
    );
  }
}

export default Navbar;
