import React, { Component } from "react";

import { Home } from "./Components-page12";

import "../styles/page12-home.scss";

class Page12 extends Component {
  state={

  }

  render() {
    return (
      <div className="page12">
        <div className="container">
          <Home />
        </div>
      </div>
    );
  }
}

export default Page12;
