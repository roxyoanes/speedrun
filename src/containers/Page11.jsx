import React, { Component } from "react";

import { Navbar, Landing, Services } from "./Components-page11";

import "../styles/page11-navbar.scss";
import "../styles/page11-landing.scss";
import "../styles/page11-services.scss";


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
        </div>
      </div>
    );
  }
}

export default Page11;
