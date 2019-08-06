import React, { Component } from "react";

import { Landing } from "./Components-page9";
import "../styles/page9-landing.scss";

class Page9 extends Component {
  state = {}

  render() {
    return (
      <div className="page9">
        <div className="container">
          <Landing />
        </div>
      </div>
    );
  }
}

export default Page9;
