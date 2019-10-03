import React, { Component } from "react";

import { Navbar, Landing, Services, About, Team, Gallery } from "./Components-page11";
import Modal from "./modal/modal11";

import "../styles/page11-navbar.scss";
import "../styles/page11-landing.scss";
import "../styles/page11-services.scss";
import "../styles/page11-about.scss";
import "../styles/page11-team.scss";
import "../styles/page11-gallery.scss";


class Page11 extends Component {
  state={
    modalNumber: 0,
    isShowing: false,
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
    const { modalNumber, isShowing } = this.state;
    return (
      <div className="page11">
        <div className="container">
          <Navbar />
          <Landing />
          <Services />
          <About />
          <Team />
          <Gallery openModalHandler={this.openModalHandler} />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default Page11;
