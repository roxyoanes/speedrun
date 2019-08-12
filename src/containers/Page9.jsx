import React, { Component } from "react";

import { Landing, Navbar, About, Services, Menu, Gallery, Testimonial, Contact } from "./Components-page9";
import "../styles/page9-landing.scss";
import "../styles/page9-navbar.scss";
import "../styles/page9-about.scss";
import "../styles/page9-services.scss";
import "../styles/page9-menu.scss";
import "../styles/page9-gallery.scss";
import "../styles/page9-testimonial.scss";
import "../styles/page9-contact.scss";


import Modal from "./modal/modal9";

class Page9 extends Component {
  state = {
    isShowing: false,
    modalNumber: 0,
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
    const { isShowing, modalNumber } = this.state;
    return (
      <div className="page9">
        <div className="container">
          <Landing />
          <Navbar />
          <About />
          <Services />
          <Menu />
          <Gallery openModalHandler={this.openModalHandler} />
          <Testimonial />
          <Contact />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default Page9;
