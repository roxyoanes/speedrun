import React from "react";

const Contact = () => (
  <div className="contact" id="contact">
    <h2 className="contact__title">Contact Us</h2>
    <div className="contact__containers-wrapper">
      <div className="contact__container1">
        <form className="contact__info-wrapper">
          <input type="text" className="contact__form icon-name" id="name" placeholder="Your Name..." />
          <i className="fas fa-user user-icon" />
          <input type="text" className="contact__form icon-address" id="name" placeholder="Email Address..." />
          <i className="far fa-envelope user-icon user-icon--address" />
          <textarea type="text" className="contact__form contact__textarea" id="name" placeholder="Message..." />
          <i className="fas fa-pencil-alt user-icon user-icon--message" />
        </form>
        <div className="contact__btn-wrapper">
          <button type="button" className="prices-btn prices-btn--contact">SEND</button>
        </div>
      </div>
      <div className="contact__container2">
        <p className="contact__p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nam magnam natus tempora cumque, aliquam deleniti voluptatibus voluptas. Maecenas ultrices finibus erat sit amet auctor. Curabitur et metus laoreet, fermentum quam sagittis, cursus augue.
        </p>
        <div className="contact__address-details">
          <p className="contact__details">
            <i className="fas fa-map-marker icon-address" />
        1508 Kembery Drive, Chicago, IL 60605
          </p>
          <p className="contact__details">
            <i className="fas fa-phone icon-address" />
        202-314-1583
          </p>
          <p className="contact__details">
            <i className="fas fa-envelope icon-address" />
        support@biss.com
          </p>
        </div>
        <div className="contact__icons-container">
          <span className="contact__icon-wrapper">
            <i className="fab fa-facebook-f icon-contact" />
          </span>
          <span className="contact__icon-wrapper">
            <i className="fab fa-twitter icon-contact" />
          </span>
          <span className="contact__icon-wrapper">
            <i className="fab fa-google-plus-g icon-contact red" />
          </span>
          <span className="contact__icon-wrapper">
            <i className="fab fa-skype icon-contact" />
          </span>
          <span className="contact__icon-wrapper">
            <i className="fab fa-linkedin icon-contact" />
          </span>
          <span className="contact__icon-wrapper">
            <i className="fab fa-youtube icon-contact red" />
          </span>
        </div>
      </div>
    </div>
    <div className="contact__footer-container">
      <p className="contact__text-footer">
      Copyright © 2015 Template by
        <a href="http://webthemez.com" className="contact__highlight"> webthemez.com</a>
        .
      </p>
    </div>
  </div>
);

export default Contact;
