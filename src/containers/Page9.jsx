import React, { Component } from "react";

import { Landing, Navbar, About, Services } from "./Components-page9";
import "../styles/page9-landing.scss";
import "../styles/page9-navbar.scss";
import "../styles/page9-about.scss";
import "../styles/page9-services.scss";


class Page9 extends Component {
  state = {}

  render() {
    return (
      <div className="page9">
        <div className="container">
          <Landing />
          <Navbar />
          <About />
          <Services />
        </div>
      </div>
    );
  }
}

export default Page9;
