import React from "react";

const Contact = () => (
  <div className="contact" id="contact">
    <h2 className="contact__title">Get In Touch</h2>
    <h6 className="contact__subtitle">Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci ipsum</h6>
    <div className="contact__info-container">
      <div className="contact__info-pair">
        <h4 className="contact__info-title">Flavour Restaurant</h4>
        <p className="contact__p">104, Some place, New York, USA</p>
      </div>
      <div className="contact__info-pair">
        <h4 className="contact__info-title">Call Us</h4>
        <p className="contact__p">+1 123 4567890</p>
      </div>
      <div className="contact__info-pair">
        <h4 className="contact__info-title">Email Us</h4>
        <p className="contact__p">support@sitename.com</p>
      </div>
    </div>
    <span className="landing__socials-wrapper landing__socials-wrapper--contact">
      <a href className="landing__icon-wrapper">
        <i className="fab fa-facebook-f icon" />
      </a>
      <a href className="landing__icon-wrapper">
        <i className="fab fa-twitter icon" />
      </a>
      <a href className="landing__icon-wrapper">
        <i className="fab fa-google-plus icon" />
      </a>
      <a href className="landing__icon-wrapper">
        <i className="fab fa-pinterest icon" />
      </a>
    </span>
    <form className="contact__send-wrapper">
      <input type="text" className="contact__form" id="name" placeholder="Your Name" />
      <input type="text" className="contact__form" id="name" placeholder="Email Address" />
      <textarea type="text" className="contact__form contact__textarea" id="name" placeholder="Message" />
    </form>
    <div className="contact__btn-wrapper">
      <button type="button" className="contact-btn">SEND</button>
    </div>
    <div className="contact__rights">
      <h5 className="contact__footer">
        © 2018 Company Name. Template by
        <a className="contact__link" href="http://webthemez.com/interior-design/">WebThemez.com</a>
      </h5>
    </div>
  </div>
);

export default Contact;
