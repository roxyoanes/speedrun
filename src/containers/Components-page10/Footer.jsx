import React from "react";

const Footer = () => (
  <div className="footer">
    <span className="footer__icons">
      <a href="https://twitter.com/" className="footer__icon-wrapper">
        <i className="fab fa-twitter icon" />
      </a>
      <a href="https://facebook.com/" className="footer__icon-wrapper">
        <i className="fab fa-facebook-f icon" />
      </a>
      <a href="https://plus.google.com/" className="footer__icon-wrapper">
        <i className="fab fa-google-plus-g icon" />
      </a>
      <a href="https://instagram.com/" className="footer__icon-wrapper">
        <i className="fab fa-instagram icon" />
      </a>
    </span>
    <h5 className="footer__text">
     © 2018 Company Name. Template by
      <a className="footer__link" href="http://webthemez.com/interior-design/">WebThemez.com</a>
    </h5>
    <div className="footer__btn-wrapper">
      <a href="#top" className="footer__btn-up">
        <i className="fas fa-arrow-up arrow-btn" />
      </a>
    </div>
  </div>
);

export default Footer;
