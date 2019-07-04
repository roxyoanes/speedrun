import React, { Component } from "react";

import {
  Navbar,
  Landing,
  About,
  Services,
  Portfolio,
  Contact,
  Footer,
} from "./Components-page7";
import "../styles/page7.scss";
import Modal7 from "./modal/modal7";

class Page7 extends Component {
  state = {
    isShowing: false,
    modalNumber: 0,
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
      <div className="page7">
        <div className="container">
          <Navbar scrolled={scrolled} />
          <Landing />
          <About />
          <Services />
          <Portfolio openModalHandler={this.openModalHandler} />
          <Contact />
          <Footer />
        </div>
        {isShowing ? (
          <Modal7
            number={modalNumber}
            className="modal"
            close={this.closeModalHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default Page7;
