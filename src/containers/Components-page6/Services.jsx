import React from "react";

import pic1 from "../images/servicepers1.jpg";
import pic2 from "../images/servicepers2.jpg";
import pic3 from "../images/servicepers3.jpg";

const Services = () => (
  <div className="services">
    <div className="services__page-title">
      <h2 className="services__title">SERVICES</h2>
    </div>
    <div className="services__about-wrapper">
      <h3 className="services__text">
        Our Best <span className="services__text-color">Services</span>
      </h3>
      <p className="services__p">
        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
      </p>
      <p className="services__p">
        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
      </p>
    </div>
    <div className="services__skills-container">
      <div className="services__skills-card">
        <span className="services__icon-container">
          <i className="fas fa-book" />
        </span>
        <div className="services__box-area">
          <h3 className="services__box-title">Web Designing</h3>
          <p className="services__box-p">
            Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt eius magni provident
          </p>
        </div>
      </div>
      <div className="services__skills-card">
        <span className="services__icon-container">
          <i className="fa fa-users" />
        </span>
        <div className="services__box-area">
          <h3 className="services__box-title">E-Commerce</h3>
          <p className="services__box-p">
            Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt eius magni provident
          </p>
        </div>
      </div>

      <div className="services__skills-card">
        <span className="services__icon-container">
          <i className="fa fa-trophy" />
        </span>
        <div className="services__box-area">
          <h3 className="services__box-title">Quality</h3>
          <p className="services__box-p">
            Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt eius magni provident
          </p>
        </div>
      </div>

      <div className="services__skills-card">
        <span className="services__icon-container">
          <i className="fas fa-globe" />
        </span>
        <div className="services__box-area">
          <h3 className="services__box-title">Mobile App</h3>
          <p className="services__box-p">
            Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt eius magni provident
          </p>
        </div>
      </div>
    </div>
    <div className="services__info-container">
      <div className="services__info-card">
        <i className="far fa-bell icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">Awesome Design</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__info-card">
        <i className="fab fa-font-awesome-flag icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">Font Awesome</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__info-card">
        <i className="far fa-lightbulb icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">Bootstrap</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__info-card">
        <i className="fas fa-code icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">SEO Ready</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__info-card">
        <i className="fas fa-compress-arrows-alt icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">Fully Responsive</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__info-card">
        <i className="fab fa-css3-alt icon" />
        <div className="services__text-box">
          <h3 className="services__info-title">CSS3 + HTML5</h3>
          <p className="services__info-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
    </div>
    <div className="services__people-container">
      <div className="services__people-card">
        <div className="services__img-card">
          <img src={pic1} alt="person" className="services__img" />
          <span className="services__text-img">Material Design</span>
        </div>
        <div className="services__card-content">
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__people-card">
        <div className="services__img-card">
          <img src={pic2} alt="person" className="services__img" />
          <span className="services__text-img">Bootstrap</span>
        </div>
        <div className="services__card-content">
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
      <div className="services__people-card">
        <div className="services__img-card">
          <img src={pic3} alt="person" className="services__img" />
          <span className="services__text-img">HTML5/CSS§</span>
        </div>
        <div className="services__card-content">
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
          <p className="services__card-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quae porro consequatur aliquam, incidunt
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
