import React from "react";

import { Navbar, Landing, About } from "./Components-page7";
import "../styles/page7.scss";

const Page7 = () => (
  <div className="page7">
    <div className="container">
      <Navbar />
      <Landing />
      <About />
    </div>
  </div>
);

export default Page7;
