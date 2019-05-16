import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="footer-icons">
      <span className="fa-stack footer-icons fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
      </span>
      <span className="fa-stack footer-icons fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
      </span>
      <span className="fa-stack footer-icons fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-github fa-stack-1x fa-inverse" />
      </span>
    </div>
    <p className="footer__p">Copyright © Your Website 2019</p>
  </div>
);

export default Footer;
