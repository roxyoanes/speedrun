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
          )
          }
        </button>
        {showMenu ? (
          <nav className="menu-drop" id="active">
            <Scrollspy
              style={{
                display: "flex", flexDirection: "column", margin: "0", paddingLeft: "0",
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
              <div className="menu-drop__header">
                <a href="#top" className="menu-drop__heading">
                  Start Bootstrap
                </a>
              </div>
              <div className="menu-drop__list">
                <a href="#top" className="menu-drop__item">
                  Home
                </a>
                <a href="#about" className="menu-drop__item">
                  About
                </a>
                <a href="#services" className="menu-drop__item">
                  Services
                </a>
                <a href="#portfolio" className="menu-drop__item">
                  Portfolio
                </a>
              </div>
            </Scrollspy>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
