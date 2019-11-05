import React, { Component } from "react";

import { Home, Navbar, About, Skills, Projects, Experience, Testimonials } from "./Components-page12";

import "../styles/page12-home.scss";
import "../styles/page12-navbar.scss";
import "../styles/page12-about.scss";
import "../styles/page12-skills.scss";
import "../styles/page12-projects.scss";
import "../styles/page12-experience.scss";
import "../styles/page12-testimonials.scss";


import Modal from "./modal/modal12";


class Page12 extends Component {
  state={
    isShowing: false,
    modalNumber: 0,
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction, true);
  }

  scrollFunction = () => {
    const isTop = window.scrollY < 400;
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
      <div className="page12">
        <div className="container">
          <Home />
          <Navbar scrolled={scrolled} />
          <About />
          <Skills />
          <Projects openModalHandler={this.openModalHandler} />
          <Experience />
          <Testimonials />
        </div>
        {isShowing ? (
          <Modal number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default Page12;
