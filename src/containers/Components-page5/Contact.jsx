import React from "react";

const Contact = () => (
  <div className="contact" id="contact">
    <h2 className="contact__heading">CONTACT</h2>
    <div className="contact__container">
      <div
        className="contact__info"
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <div className="contact__details">
          <h4 className="contact__title">Ballet One Page</h4>
          <p className="contact__details">104, Some street, NewYork, USA</p>
        </div>
        <div className="contact__details">
          <h4 className="contact__title">call us</h4>
          <p className="contact__details">+1 234 567890</p>
        </div>
        <div className="contact__details">
          <h4 className="contact__title">Email us</h4>
          <p className="contact__details">support@sitename.com</p>
        </div>
        <span
          className="contact__icons"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <i className="fab fa-twitter contact-icon" />
          <i className="fab fa-facebook contact-icon" />
          <i className="fab fa-pinterest contact-icon" />
          <i className="fab fa-google-plus contact-icon" />
        </span>
      </div>
      <div
        className="contact__input-areas"
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <input
          className="contact__input-name"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="contact__input-email"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="contact__input-message"
          type="text"
          placeholder="Message"
        />
      </div>
    </div>
    <div className="contact__button">
      <button className="button button--big" type="button">
        SEND
      </button>
    </div>
  </div>
);

export default Contact;
