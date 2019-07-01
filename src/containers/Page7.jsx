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
  };

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
    const { isShowing, modalNumber } = this.state;
    return (
      <div className="page7">
        <div className="container">
          <Navbar />
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
