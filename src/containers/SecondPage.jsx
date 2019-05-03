import React, { Component } from "react";

import "../styles/second-page.scss";
import "../styles/default.scss";

import {
  Navbar,
  Landing,
  Services,
  Portfolio,
  About,
  Team,
  Sponsors,
  Contact,
  Footer,
} from "./Components-secondpage";

import Modal from "./modal/modal";

class SecondPage extends Component {
  state = {
    isShowing: false,
    modalNumber: 0,
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

  openModalHandler = (number) => {
    this.setState({
      isShowing: true,
      modalNumber: number,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };


  render() {
    const { isShowing, modalNumber, scrolled } = this.state;

    return (
      <div className="secondpage">
        <div className="container">
          <Navbar scrolled={scrolled} />
          <Landing />
          <Services />
          <Portfolio openModalHandler={this.openModalHandler} />
          <About />
          <Team />
          <Sponsors />
          <Contact />
          <Footer />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default SecondPage;
