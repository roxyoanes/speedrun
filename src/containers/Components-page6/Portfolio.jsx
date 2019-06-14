import React from "react";
import Gallery from "../Components-page5/Gallery";

const Portfolio = () => (
  <div className="portfolio">
    <div className="portfolio__page-title">
      <h2 className="portfolio__title">PORTFOLIO</h2>
    </div>
    <div className="portfolio__about-wrapper">
      <h3 className="portfolio__text">
        Our
        {" "}
        <span className="portfolio__text-color">Gallery</span>
      </h3>
      <p className="portfolio__p">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
      <p className="portfolio__p">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
    </div>
    <Gallery />
  </div>
);

export default Portfolio;
