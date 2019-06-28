import React from "react";

import { Navbar, Landing, About, Services, Portfolio } from "./Components-page7";
import "../styles/page7.scss";

const Page7 = () => (
  <div className="page7">
    <div className="container">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Portfolio />
    </div>
  </div>
);

export default Page7;
