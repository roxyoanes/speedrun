import React from 'react';

import '../styles/second-page.scss';
import '../styles/default.scss';

import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/04.jpg';
import pic5 from './images/05.jpg';
import pic6 from './images/06.jpg';
import mountain from './images/mountain.jpg';
import airplane from './images/airplane.jpg';
import laptop from './images/laptop.jpg';
import mountain2 from './images/mountain2.jpg';

const SecondPage = () => (
  <div className="secondpage">
    <div className="container">
      <div className="navbar">
        <a className="start" href="#top">Start Bootstrap</a>
        <div className="navbar__right-side">
          <nav className="navbar__elements">
            <button className="navbar__navbar-button" type="button">SERVICES</button>
            <button className="navbar__navbar-button" type="button">PORTFOLIO</button>
            <button className="navbar__navbar-button" type="button">ABOUT</button>
            <button className="navbar__navbar-button" type="button">TEAM</button>
            <button className="navbar__navbar-button" type="button">CONTACT</button>
          </nav>
        </div>
      </div>
      <div className="landing-page">
        <h2 className="landing-page__welcome">Welcome To Our Studio!</h2>
        <h3 className="landing-page__subtext">IT'S NICE TO MEET YOU</h3>
        <button className="button" type="button">TELL ME MORE</button>
      </div>
      <div className="services-page">
        <h2 className="services-page__title">SERVICES</h2>
        <h1 className="services-page__sub-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="icons">
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">E-Commerce</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">Responsive Design</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div className="card-icon">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-lock fa-stack-1x fa-inverse" />
            </span>
            <h4 className="card-icon__icons-title">Web Security</h4>
            <p className="card-icon__p-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <h2 className="services-page__title">PORTFOLIO</h2>
        <h1 className="services-page__sub-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="portfolio-images">
          <div className="wrapper">
            <img src={pic1} className="portfolio-images__img" alt="" />
            <h2 className="portfolio-images__title-img">Threads</h2>
            <h1 className="portfolio-images__sub-title-img">Illustration</h1>
          </div>
          <div className="wrapper">
            <img src={pic2} className="portfolio-images__img" alt="" />
            <h2 className="portfolio-images__title-img">Explore</h2>
            <h1 className="portfolio-images__sub-title-img">Graphic Design</h1>
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
      <div className="about">
        <h2 className="about__title">ABOUT</h2>
        <h1 className="about__sub-title">Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="timeline">
          <div className="container1">
            <div className="timeline__content-1">
              <div className="timeline__circle">
                <img src={mountain} className="timeline__img" alt="" />
              </div>
              <h4>2009-2011</h4>
              <h3>Our Humble Beginnings</h3>
              <p className="timeline__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>
          <div className="container2">
            <div className="timeline__content-2">
              <div className="timeline__circle">
                <img src={airplane} className="timeline__img" alt="" />
              </div>
              <h4>March 2011</h4>
              <h3>An Agency is Born</h3>
              <p className="timeline__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>
          <div className="container3">
            <div className="timeline__content-3">
              <div className="timeline__circle">
                <img src={laptop} className="timeline__img" alt="" />
              </div>
              <h4>December 2012</h4>
              <h3>Transition to Full Service</h3>
              <p className="timeline__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>
          <div className="container4">
            <div className="timeline__content-4">
              <div className="timeline__circle">
                <img src={mountain2} className="timeline__img" alt="" />
              </div>
              <h4>July 2014</h4>
              <h3>Phase Two Expansion</h3>
              <p className="timeline__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>
          <div className="container5">
            <div className="timeline__circle-last">
              <h4 className="timeline__last">
              Be Part
                {' '}
                <br />
              Of Our
                {' '}
                <br />
              Story!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SecondPage;
