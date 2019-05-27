import React from "react";

import "../styles/page5.scss";
import {
  Navbar, Landing, About, Services, Gallery, Pricing, Team, Clients, Contact, Footer,
} from "./Components-page5";

const Page5 = () => (
  <div className="page5">
    <div className="container">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Page5;
