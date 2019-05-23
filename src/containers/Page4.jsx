import React, { Component } from "react";

import {
  Navbar,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Map,
  Footer,
  ScrollUp,
} from "./Components-fourthpage";

import "../styles/fourth-page.scss";

class Page4 extends Component {
  state = {
    scrolled: false,
  };

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
      <div className="fourth-page">
        <div className="container">
          <Navbar />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Map />
          <Footer />
          <ScrollUp scrolled={scrolled} />
        </div>
      </div>
    );
  }
}

export default Page4;
