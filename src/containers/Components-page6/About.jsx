import React from "react";
import pic from "../images/gallery3.jpg";
import team1 from "../images/team1.jpg";
import team2 from "../images/teamPic2.jpg";
import team3 from "../images/team3sdv.jpg";
import team4 from "../images/teamPic1.jpg";

import Accordion from "./Components-first/Accordion";

const About = () => (
  <div className="about">
    <div className="about__page-title">
      <h2 className="about__title">ABOUT US</h2>
    </div>
    <div className="about__img-wrapper">
      <img src={pic} alt="man" className="about__img" />
    </div>
    <div className="about__about-wrapper">
      <h3 className="about__text">
        Our
        {" "}
        <span className="about__text-color">Company</span>
      </h3>
      <p className="about__p">
        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
      </p>
      <p className="about__p">
        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
      </p>
    </div>
    <div className="about__reason-wrapper">
      <h3 className="about__text--font">Why Choose Us?</h3>
      <p className="about__p">
        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
      </p>
      <p className="about__p">
        Sed ut perspiciaatis iste natus error sit voluptatem probably haven't
        heard of them accusamus.
      </p>
    </div>
    <div className="about__solution">
      <h3 className="about__text--font">Our Solution</h3>
    </div>
    <div className="about__wrapper">
      <div className="about__accordion-card">
        <Accordion
          text="Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
          btnText="First"
          icon="fas fa-arrow-right"
        />
      </div>
      <div className="about__accordion-card">
        <Accordion
          text="Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
          btnText="Second"
          icon="fas fa-arrow-right"
        />
      </div>
      <div className="about__accordion-card">
        <Accordion
          text="Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
          btnText="Third"
          icon="fas fa-arrow-right"
        />
      </div>
      <div className="about__accordion-card">
        <Accordion
          text="Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas"
          btnText="Fourth"
          icon="fas fa-arrow-right"
        />
      </div>
    </div>
    <div className="about__expertise-wrapper">
      <h3 className="about__text--font">Our Expertise</h3>
      <div className="about__statistics-container">
        <h6 className="about__statistics-text">Web Development</h6>
        <div className="about__progress-container">
          <div className="about__progress-bar" />
        </div>
      </div>
      <div className="about__statistics-container">
        <h6 className="about__statistics-text">Designing</h6>
        <div className="about__progress-container">
          <div className="about__progress-bar--color2" />
        </div>
      </div>
      <div className="about__statistics-container">
        <h6 className="about__statistics-text">User Experience</h6>
        <div className="about__progress-container">
          <div className="about__progress-bar--color3" />
        </div>
      </div>
      <div className="about__statistics-container">
        <h6 className="about__statistics-text">Development</h6>
        <div className="about__progress-container">
          <div className="about__progress-bar--color4" />
        </div>
      </div>
    </div>
    <div className="about__team-container">
      <h3 className="about__text--font">Our Team</h3>
      <div className="about__members">
        <div className="about__team-member">
          <img src={team1} alt="member" className="about__team-img" />
          <h4 className="about__team-name">Jane Doe</h4>
          <h6 className="about__team-job">Creative</h6>
        </div>
        <div className="about__team-member">
          <img src={team2} alt="member" className="about__team-img" />
          <h4 className="about__team-name">John Mark</h4>
          <h6 className="about__team-job">Programmer</h6>
        </div>
        <div className="about__team-member">
          <img src={team3} alt="member" className="about__team-img" />
          <h4 className="about__team-name">Bill Noah</h4>
          <h6 className="about__team-job">CEO</h6>
        </div>
        <div className="about__team-member">
          <img src={team4} alt="member" className="about__team-img" />
          <h4 className="about__team-name">Jordan James</h4>
          <h6 className="about__team-job">Manager</h6>
        </div>
      </div>
    </div>
  </div>
);

export default About;
