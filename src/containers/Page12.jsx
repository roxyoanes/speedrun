import React, { Component } from "react";

import { Home, Navbar, About, Skills, Projects } from "./Components-page12";

import "../styles/page12-home.scss";
import "../styles/page12-navbar.scss";
import "../styles/page12-about.scss";
import "../styles/page12-skills.scss";
import "../styles/page12-projects.scss";

class Page12 extends Component {
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
    const isTop = window.scrollY < 400;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { scrolled } = this.state;
    return (
      <div className="page12">
        <div className="container">
          <Home />
          <Navbar scrolled={scrolled} />
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    );
  }
}

export default Page12;
