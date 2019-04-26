import React from 'react';

import '../../styles/second-page.scss';
import '../../styles/default.scss';

const Contact = () => (
  <div className="contact">
    <h2 className="contact__title">CONTACT US</h2>
    <h1 className="contact__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="inputs">
      <div className="inputs__left">
        <input
          className="inputs__name input"
          type="text"
          placeholder="Your Name*"
        />
        <input
          className="inputs__email input"
          type="text"
          placeholder="Your Email*"
        />
        <input
          className="inputs__phone input"
          type="text"
          placeholder="Your Phone*"
        />
      </div>
      <textarea
        className="inputs__message input"
        type="text"
        placeholder="Your Message*"
      />
    </div>
    <div className="button-btn">
      <button className="button" type="button">
        SEND MESSAGE
      </button>
    </div>
  </div>
);

export default Contact;
