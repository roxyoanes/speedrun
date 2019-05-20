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

class FourthPage extends Component {
  state={
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }


  render() {
    const { scrolled } = this.state;
    return (
      <div className="fourth-page">
        <div className="container">
          <div className="image">
            <Navbar />
            <Card1 />
          </div>
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

export default FourthPage;
