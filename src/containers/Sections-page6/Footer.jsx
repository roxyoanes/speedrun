import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="footer__copyright">
      <p>
        <span>© Bootstrap Template 2017 All right reserved. Template By</span>
        <a
          href="http://webthemez.com/free-bootstrap-templates/"
          className="footer__website"
        >
          WebThemez
        </a>
      </p>
    </div>
    <span className="footer__icons-list">
      <i className="fab fa-twitter footer-icon" />
      <i className="fab fa-facebook footer-icon" />
      <i className="fab fa-linkedin footer-icon" />
      <i className="fab fa-pinterest footer-icon" />
      <i className="fab fa-google-plus footer-icon" />
    </span>
  </div>
);

export default Footer;
