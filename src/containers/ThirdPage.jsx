import React from "react";

import "../styles/third-page.scss";
import "../styles/default-third.scss";

import {
  About, Experience, Education, Skills, Interests, Awards,Navbar,
} from "./Components-thirdpage";

const ThirdPage = () => (
  <div className="third-page">
    <div className="container">
      <Navbar />
      <About />
      <hr className="break-line" />
      <Experience />
      <hr className="break-line" />
      <Education />
      <hr className="break-line" />
      <Skills />
      <hr className="break-line" />
      <Interests />
      <hr className="break-line" />
      <Awards />
    </div>
  </div>
);

export default ThirdPage;
