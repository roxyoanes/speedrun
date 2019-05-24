import React from "react";

import "../styles/page5.scss";
import logonavbar5 from "./images/logonavbar5.png";
import landing5 from "./images/landing5.png";
import aboutimg from "./images/aboutimg.jpg";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import gallery6 from "./images/gallery6.jpg";

const Page5 = () => (
  <div className="page5">
    <div className="container">
      <div className="navbar">
        <a href="#top" className="navbar__logo">
          <img src={logonavbar5} className="navbar__logo-img" alt="logo" />
        </a>
        <div className="navbar__right-side">
          <button className="navbar-button" type="button">
            <i className="fas fa-bars" />
          </button>
          <nav className="navbar__elements">
            <a href="#top" className="navbar__list-item">
              HOME
            </a>
            <a href="#top" className="navbar__list-item">
              ABOUT US
            </a>
            <a href="#top" className="navbar__list-item">
              SERVICES
            </a>
            <a href="#top" className="navbar__list-item">
              PORTFOLIO
            </a>
            <a href="#top" className="navbar__list-item">
              TEAM
            </a>
            <a href="#top" className="navbar__list-item">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
      <div className="landing">
        <div className="landing__text-section">
          <h2 className="landing__heading">
            The
            {" "}
            <strong className="landing__bold">BEST</strong>
            {" "}
            One Page Web
            Template
          </h2>
          <p className="landing__paragraph">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the galley of type and scrambled it
            to make a type specimen.
          </p>
          <button className="button" type="button">
            READ MORE
          </button>
        </div>
        <div className="landing__img-wrapper">
          <img src={landing5} className="landing__img" alt="landing-img" />
        </div>
      </div>
      <div className="about">
        <div className="about__part1">
          <h2 className="about__heading">ABOUT US</h2>
          <img src={aboutimg} className="about__img" alt="img" />
        </div>
        <div className="about__part2">
          <h3 className="about__subheading">Lorem Ipsum has been the industry's standard dummy text ever..</h3>
          <p className="about__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="about__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="services">
        <h2 className="services__heading">SERVICES</h2>
        <div className="services__all-cards">
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fab fa-android icon" />
              </span>
              <h3 className="services__card-title">ANDROID</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fab fa-apple icon" />
              </span>
              <h3 className="services__card-title">APPLE IOS</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fab fa-html5 icon" />
              </span>
              <h3 className="services__card-title">DESIGN</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fab fa-dropbox icon" />
              </span>
              <h3 className="services__card-title">CONCEPT</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fab fa-slack icon" />
              </span>
              <h3 className="services__card-title">USER RESEARCH</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__card-dashed-area">
              <span className="services__card-icon">
                <i className="fas fa-users icon" />
              </span>
              <h3 className="services__card-title">USER EXPERIENCE</h3>
              <p className="services__card-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <h2 className="gallery__heading">GALLERY</h2>
        <p className="gallery__description">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <div className="gallery__tags-container">
          <a href="#top" className="gallery__tag">ALL</a>
          <a href="#top" className="gallery__tag gallery__backslash">ARTWORK</a>
          <a href="#top" className="gallery__tag gallery__backslash">CREATIVE</a>
          <a href="#top" className="gallery__tag gallery__backslash">NATURE</a>
          <a href="#top" className="gallery__tag gallery__backslash">OUTSIDE</a>
          <a href="#top" className="gallery__tag gallery__backslash">PHOTOGRAPHY</a>
        </div>
        <div className="gallery__images-container">
          <div className="gallery__card">
            <img src={gallery1} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">1st gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
          <div className="gallery__card">
            <img src={gallery2} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">2nd gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
          <div className="gallery__card">
            <img src={gallery3} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">3rd gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
          <div className="gallery__card">
            <img src={gallery4} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">4th gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
          <div className="gallery__card">
            <img src={gallery5} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">5th gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
          <div className="gallery__card">
            <img src={gallery6} className="gallery__img" alt="hand" />
            <h5 className="gallery__card-title">6th gallery Item</h5>
            <h6 className="gallery__card-subheading">Nullam id dolor id nibh ultricies vehicula.</h6>
          </div>
        </div>
      </div>
      <div className="pricing">
        <h2 className="pricing__heading">PRICING</h2>
        <p className="pricing__description">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <div className="pricing__cards-container">
          <div className="pricing__card">
            <h2 className="pricing__title">Starter</h2>
            <div className="pricing__content">
              <p className="pricing__price">
                <sup>$</sup>
                8.00
              </p>
              <p>Best Template</p>
              <p>Clean and modern</p>
              <p>Bootstrap & HTML5</p>
              <p>24/7 support</p>
            </div>
            <div className="pricing__button-wrapper">
              <button type="button" className="pricing-button">Buy Now</button>
            </div>
          </div>
          <div className="pricing__card">
            <h2 className="pricing__title">Popular</h2>
            <div className="pricing__content">
              <p className="pricing__price">
                <sup>$</sup>
                12.00
              </p>
              <p>Best Template</p>
              <p>Clean and modern</p>
              <p>Bootstrap & HTML5</p>
              <p>24/7 support</p>
            </div>
            <div className="pricing__button-wrapper">
              <button type="button" className="pricing-button">Buy Now</button>
            </div>
          </div>
          <div className="pricing__card">
            <h2 className="pricing__title">Business</h2>
            <div className="pricing__content">
              <p className="pricing__price">
                <sup>$</sup>
                16.00
              </p>
              <p>Best Template</p>
              <p>Clean and modern</p>
              <p>Bootstrap & HTML5</p>
              <p>24/7 support</p>
            </div>
            <div className="pricing__button-wrapper">
              <button type="button" className="pricing-button">Buy Now</button>
            </div>
          </div>
          <div className="pricing__card--noshow">
            <h2 className="pricing__title">Enterprise</h2>
            <div className="pricing__content">
              <p className="pricing__price">
                <sup>$</sup>
                20.00
              </p>
              <p>Best Template</p>
              <p>Clean and modern</p>
              <p>Bootstrap & HTML5</p>
              <p>24/7 support</p>
            </div>
            <button type="button" className="pricing-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page5;
