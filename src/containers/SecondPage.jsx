import React, { Component } from 'react';

import '../styles/second-page.scss';
import '../styles/default.scss';

import Modal from './modal/modal';
import Footer from './Components-secondpage/Footer';
import Navbar from './Components-secondpage/Navbar';
import Services from './Components-secondpage/Services';
import About from './Components-secondpage/About';
import Team from './Components-secondpage/Team';
import Sponsors from './Components-secondpage/Sponsors';
import Contact from './Components-secondpage/Contact';
import Landing from './Components-secondpage/Landing';

import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/04.jpg';
import pic5 from './images/05.jpg';
import pic6 from './images/06.jpg';


class SecondPage extends Component {
  state = {
    isShowing: false,
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    return (
      <div className="secondpage">
        <div className="container">
          <Navbar />
          <Landing />
          <Services />
          <div className="portfolio">
            <h2 className="services-page__title">PORTFOLIO</h2>
            <h1 className="services-page__sub-title">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="portfolio-images">
              <div className="wrapper">
                <img
                  src={pic1}
                  className="portfolio-images__img"
                  alt=""
                  onClick={this.openModalHandler}
                />
                <h2 className="portfolio-images__title-img">Threads</h2>
                <h1 className="portfolio-images__sub-title-img">
                  Illustration
                </h1>
              </div>
              <div className="wrapper">
                <img src={pic2} className="portfolio-images__img" alt="" />
                <h2 className="portfolio-images__title-img">Explore</h2>
                <h1 className="portfolio-images__sub-title-img">
                  Graphic Design
                </h1>
              </div>
              <div className="wrapper">
                <img src={pic3} className="portfolio-images__img" alt="" />
                <h2 className="portfolio-images__title-img">Finish</h2>
                <h1 className="portfolio-images__sub-title-img">Identity</h1>
              </div>
              <div className="wrapper">
                <img src={pic4} className="portfolio-images__img" alt="" />
                <h2 className="portfolio-images__title-img">Lines</h2>
                <h1 className="portfolio-images__sub-title-img">Branding</h1>
              </div>
              <div className="wrapper">
                <img src={pic5} className="portfolio-images__img" alt="" />
                <h2 className="portfolio-images__title-img">Southwest</h2>
                <h1 className="portfolio-images__sub-title-img">Web Design</h1>
              </div>
              <div className="wrapper">
                <img src={pic6} className="portfolio-images__img" alt="" />
                <h2 className="portfolio-images__title-img">Window</h2>
                <h1 className="portfolio-images__sub-title-img">Photography</h1>
              </div>
            </div>
          </div>
          <About />
          <Team />
          <Sponsors />
          <Contact />
          <Footer />
        </div>
        {this.state.isShowing ? (
          <Modal
            className="modal"
            close={this.closeModalHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default SecondPage;
