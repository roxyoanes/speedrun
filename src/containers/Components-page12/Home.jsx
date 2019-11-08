import React from "react";

const Home = () => (
  <div className="home" id="home">
    <div
      className="home__wrapper"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <h2 className="home__title">
        I AM ANDEY
      </h2>
      <h2 className="home__title home__title--color">CREATIVE DESIGNER</h2>
      <p className="home__p">
        I am Andey Markus, from planet with a passion of Web, Graphic and Interactive design.
        <br />
        I specialise in standards compliant websites with a focus on usability.
        <br />
        Enthusiastic about life, design and innovation.
      </p>
      <span className="home__socials-wrapper">
        <a
          href
          className="home__icon-wrapper"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          <i className="fab fa-facebook-f icon" />
        </a>
        <a
          href
          className="home__icon-wrapper"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        >
          <i className="fab fa-twitter icon" />
        </a>
        <a
          href
          className="home__icon-wrapper"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="700"
        >
          <i className="fab fa-google-plus icon" />
        </a>
        <a
          href
          className="home__icon-wrapper"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="900"
        >
          <i className="fab fa-pinterest icon" />
        </a>
      </span>
    </div>
  </div>
);

export default Home;
