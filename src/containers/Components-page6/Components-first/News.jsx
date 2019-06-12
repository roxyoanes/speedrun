import React from "react";
import Accordion from "./Accordion";

const News = () => (
  <div className="news">
    <h3 className="news__subtitle">Latest News</h3>
    <div className="news__wrapper">
      <div className="news__card-news">
        <Accordion
          text="Perspiciaatis unde omnis iste natus error Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur. sit voluptatem
                  accusanti"
          btnText="First"
          icon="fas fa-cloud"
        />
        <Accordion
          text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                  Perspiciaatis unde omnis iste natus error sit voluptatem
                  accusanti"
          btnText="Second"
          icon="fas fa-map-marker-alt"
        />
        <Accordion
          text="Perspiciaatis Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur. unde omnis iste natus error sit voluptatem
                  accusanti"
          btnText="Third"
          icon="fas fa-fire"
        />
      </div>
    </div>
  </div>
);

export default News;
