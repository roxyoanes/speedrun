import React, { Component } from "react";

import { Landing, Navbar } from "./Components-page9";
import "../styles/page9-landing.scss";
import "../styles/page9-navbar.scss";


class Page9 extends Component {
  state = {}

  render() {
    return (
      <div className="page9">
        <div className="container">
          <Landing />
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Page9;
