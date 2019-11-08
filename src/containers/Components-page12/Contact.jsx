import React from "react";

const Contact = () => (
  <div className="contact">
    <h3 className="contact__title">Get In Touch</h3>
    <p className="contact__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</p>
    <div className="contact__wrapper" data-aos="fade-down" data-aos-duration="1500">
      <div className="contact__info-container">
        <div className="contact__info-card">
          <h4 className="contact__info-title">Andey</h4>
          <p className="contact__info-address">104, Some street, New York, USA</p>
        </div>
        <div className="contact__info-card">
          <h4 className="contact__info-title">Call us</h4>
          <p className="contact__info-address">+3 958 000</p>
        </div>
        <div className="contact__info-card">
          <h4 className="contact__info-title">Email us</h4>
          <p className="contact__info-address">support@sitename.com</p>
        </div>
        <span className="home__socials-wrapper home__socials-wrapper--contact">
          <a
            href
            className="home__icon-wrapper"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
          >
            <i className="fab fa-facebook-f icon" />
          </a>
          <a
            href
            className="home__icon-wrapper"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            <i className="fab fa-twitter icon" />
          </a>
          <a
            href
            className="home__icon-wrapper"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
          >
            <i className="fab fa-google-plus icon" />
          </a>
          <a
            href
            className="home__icon-wrapper"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
          >
            <i className="fab fa-pinterest icon" />
          </a>
        </span>
      </div>
      <div className="contact__form-wrapper">
        <form className="contact__send-wrapper">
          <input type="text" className="contact__form" id="name" placeholder="Your Name" />
          <input type="text" className="contact__form" id="name" placeholder="Email Address" />
          <textarea type="text" className="contact__form contact__textarea" id="name" placeholder="Message" />
        </form>
        <div className="contact__btn-wrapper">
          <button type="button" className="contact-btn">SEND</button>
        </div>
      </div>
    </div>

  </div>
);

export default Contact;
