import React from "react";

import "../styles/third-page.scss";

import {
  About, Experience, Education, Skills, Interests, Awards, Navbar,
} from "./Components-page3";

const Page3 = () => (
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

export default Page3;
