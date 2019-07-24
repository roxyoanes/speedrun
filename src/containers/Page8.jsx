import React, { Component } from "react";

import { Navbar, Landing, Services, About, Video, Gallery, Team, Testimonials } from "./Components-page8";
import "../styles/page8.scss";
import "../styles/page8-navbar.scss";
import "../styles/page8-landing.scss";
import "../styles/page8-services.scss";
import "../styles/page8-about.scss";
import "../styles/page8-video.scss";
import "../styles/page8-gallery.scss";
import "../styles/page8-team.scss";
import "../styles/page8-testimonials.scss";


import Modal from "./modal/modal8";

class Page8 extends Component {
  state= {
    scrolled: false,
    isShowing: false,
    modalNumber: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction, true);
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

  scrollFunction = () => {
    const isTop = window.scrollY < 50;
    if (isTop !== true) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { scrolled, isShowing, modalNumber } = this.state;
    return (
      <div className="page8">
        <div className="container">
          <Navbar scrolled={scrolled} />
          <Landing />
          <Services />
          <About />
          <Video />
          <Gallery openModalHandler={this.openModalHandler} />
          <Team />
          <Testimonials />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}
export default Page8;
