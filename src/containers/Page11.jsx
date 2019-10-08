import React, { Component } from "react";

import { Navbar, Landing, Services, About, Team, Gallery, Testimonials, Prices, Contact } from "./Components-page11";
import Modal from "./modal/modal11";

import "../styles/page11-navbar.scss";
import "../styles/page11-landing.scss";
import "../styles/page11-services.scss";
import "../styles/page11-about.scss";
import "../styles/page11-team.scss";
import "../styles/page11-gallery.scss";
import "../styles/page11-testimonials.scss";
import "../styles/page11-prices.scss";
import "../styles/page11-contact.scss";


class Page11 extends Component {
  state={
    modalNumber: 0,
    isShowing: false,
    scrolled: false,
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
    const { modalNumber, isShowing, scrolled } = this.state;
    return (
      <div className="page11">
        <div className="container">
          <Navbar scrolled={scrolled} />
          <Landing />
          <Services />
          <About />
          <Team />
          <Gallery openModalHandler={this.openModalHandler} />
          <Testimonials />
          <Prices />
          <Contact />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default Page11;
