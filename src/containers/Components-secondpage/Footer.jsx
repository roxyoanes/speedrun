import React from 'react';

import '../../styles/second-page.scss';
import '../../styles/default.scss';

const Footer = () => (
  <div className="footer">
    <p className="footer__rights">Copyright © Your Website 2019</p>
    <div className="footer__icons">
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
      </span>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
      </span>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" />
        <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
      </span>
    </div>
    <div className="footer__right-side">
      <a className="footer__right-side__a" href="#footer">
        Privacy Policy
        {' '}
      </a>
      <a className="footer__right-side__a" href="#footer">
        Terms of Use
      </a>
    </div>
  </div>
);

export default Footer;
