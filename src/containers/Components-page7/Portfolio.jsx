import React from "react";

import pic1 from "../images/portfolio1.jpg";
import pic2 from "../images/portfolio2.jpg";
import pic3 from "../images/portfolio3.jpg";
import pic4 from "../images/portfolio4.jpg";
import pic5 from "../images/portfolio5.jpg";
import pic6 from "../images/portfolio6.jpg";

const Portfolio = () => (
  <div className="portfolio">
    <div className="portfolio__card">
      <img src={pic1} className="portfolio__img" alt="portfolio" />
    </div>
    <div className="portfolio__card">
      <img src={pic2} className="portfolio__img" alt="portfolio" />
    </div>
    <div className="portfolio__card">
      <img src={pic3} className="portfolio__img" alt="portfolio" />
    </div>
    <div className="portfolio__card">
      <img src={pic4} className="portfolio__img" alt="portfolio" />
    </div>
    <div className="portfolio__card">
      <img src={pic5} className="portfolio__img" alt="portfolio" />
    </div>
    <div className="portfolio__card">
      <img src={pic6} className="portfolio__img" alt="portfolio" />
    </div>
  </div>
);

export default Portfolio;
