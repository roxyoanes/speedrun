import React, { Component } from "react";

import { Navbar, Landing, Services, About, Team } from "./Components-page11";

import "../styles/page11-navbar.scss";
import "../styles/page11-landing.scss";
import "../styles/page11-services.scss";
import "../styles/page11-about.scss";
import "../styles/page11-team.scss";


class Page11 extends Component {
  state={

  }

  render() {
    return (
      <div className="page11">
        <div className="container">
          <Navbar />
          <Landing />
          <Services />
          <About />
          <Team />
        </div>
      </div>
    );
  }
}

export default Page11;
