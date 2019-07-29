import React from "react";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact__text-wrapper">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
        semper aliquam quis mattis quam.
      </p>
    </div>
    <form className="contact__info-wrapper">
      <input type="text" className="contact__form" id="name" placeholder="Your Name..." />
      <input type="text" className="contact__form" id="name" placeholder="Email Address..." />
      <textarea type="text" className="contact__form contact__textarea" id="name" placeholder="Message..." />
    </form>
    <div className="contact__btn-wrapper">
      <button type="button" className="contact-btn">SEND</button>
    </div>
    <div className="contact__details-wrapper">
      <h2 className="contact__details-title">Contact Us</h2>
      <div className="contact__info-container">
        <strong>Company name</strong>
        <br />
        <h5 className="contact__info">1234 Street Dr.</h5>
        <h5 className="contact__info">Vancouver, BC</h5>
        <h5 className="contact__info">Canada</h5>
        <h5 className="contact__info">V6G 169</h5>
        <h5 className="contact__info">Tel: (604) 555-4321</h5>
      </div>
      <div className="contact__rights">
        <h5>
           © 2018 Company Name. Template by
          <a className="contact__link" href="http://webthemez.com/interior-design/">WebThemez.com</a>
        </h5>
      </div>
    </div>
  </div>
);

export default Contact;
