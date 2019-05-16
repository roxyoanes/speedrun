import React from "react";

import {
  Card2, Card3, Card4, Card5, Card6, Map, Footer,
} from "./Components-fourthpage";

import "../styles/fourth-page.scss";

const FourthPage = () => (
  <div className="fourth-page">
    <div className="container">
      <div className="image">
        <div className="navbar">
          <button type="button" className="button-menu">
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="card-1">
          <div className="card-1__container">
            <h1 className="card-1__heading">Stylish Portfolio</h1>
            <h3 className="card-1__subheading">
              A Free Bootstrap Theme by Start Bootstrap
            </h3>
            <a href="#top" className="card-1__button-wrapper">
              <button type="button" className="button-card">
                Find Out More
              </button>
            </a>
          </div>
        </div>
      </div>
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Map />
      <Footer />
      <div className="scroll">
        <button type="button" className="button-scroll">
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </div>
  </div>
);

export default FourthPage;
