import React, { Component } from "react";

import { Navbar, Landing } from "./Components-page11";

import "../styles/page11-navbar.scss";
import "../styles/page11-landing.scss";


class Page11 extends Component {
  state={

  }

  render() {
    return (
      <div className="page11">
        <div className="container">
          <Navbar />
          <Landing />
        </div>
      </div>
    );
  }
}

export default Page11;
