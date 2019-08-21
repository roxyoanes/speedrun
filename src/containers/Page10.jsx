import React, { Component } from "react";

import { Navbar, Landing } from "./Components-page10";

import "../styles/page10-navbar.scss";
import "../styles/page10-landing.scss";


class Page10 extends Component {
  state={
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction, true);
  }

  scrollFunction = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { scrolled } = this.state;
    return (
      <div className="page10">
        <div className="container">
          <Navbar scrolled={scrolled} />
          <Landing />
        </div>
      </div>
    );
  }
}

export default Page10;
