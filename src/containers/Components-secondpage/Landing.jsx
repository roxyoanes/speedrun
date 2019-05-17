import React from "react";

import "../../styles/second-page.scss";
import "../../styles/default.scss";

const Landing = () => (
  <div className="landing-page">
    <h2 className="landing-page__welcome">Welcome To Our Studio!</h2>
    <h3 className="landing-page__subtext">IT'S NICE TO MEET YOU</h3>
    <a href="#service">
      <button className="button" type="button">
        TELL ME MORE
      </button>
    </a>
  </div>
);

export default Landing;
