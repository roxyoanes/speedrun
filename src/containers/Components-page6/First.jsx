import React from "react";
import {
  Landing, Services, Company, Features, News, Testimonials,
} from "./Components-first";

const First = () => (
  <div>
    <Landing />
    <Services />
    <Company />
    <div className="wrapper-landing-page">
      <Features />
      <News />
      <Testimonials />
    </div>
  </div>
);

export default First;
