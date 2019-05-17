import React from "react";

import {
  Navbar, Card1, Card2, Card3, Card4, Card5, Card6, Map, Footer,
} from "./Components-fourthpage";

import "../styles/fourth-page.scss";

const FourthPage = () => (
  <div className="fourth-page">
    <div className="container">
      <div className="image">
        <Navbar />
        <Card1 />
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
