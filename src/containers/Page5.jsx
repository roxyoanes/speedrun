import React, { Component } from "react";

import "../styles/page5.scss";
import "../styles/page5-gallery.scss";
import Modal from "./modal/modal5";

import {
  Navbar,
  Landing,
  About,
  Services,
  Gallery,
  Pricing,
  Team,
  Clients,
  Contact,
  Footer,
} from "./Components-page5";

class Page5 extends Component {
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
      <div className="page5">
        <div className="container">
          <Navbar />
          <Landing />
          <About />
          <Services />
          <Gallery openModalHandler={this.openModalHandler} />
          <Pricing />
          <Team />
          <Clients />
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

export default Page5;
