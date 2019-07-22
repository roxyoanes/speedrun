import React, { Component } from "react";

import { Navbar, Landing, Services, About } from "./Components-page8";
import "../styles/page8.scss";
import "../styles/page8-navbar.scss";
import "../styles/page8-landing.scss";
import "../styles/page8-services.scss";
import "../styles/page8-about.scss";

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
          <Landing />
          <Services />
          <About />
        </div>
      </div>
    );
  }
}
export default Page8;
