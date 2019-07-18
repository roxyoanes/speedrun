import React, { Component } from "react";

import { Navbar } from "./Components-page8";
import "../styles/page8.scss";
import "../styles/page8-navbar.scss";

class Page8 extends Component {
  state= {
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
      <div className="page8">
        <div className="container">
          <Navbar scrolled={scrolled} />
        </div>
      </div>
    );
  }
}
export default Page8;
