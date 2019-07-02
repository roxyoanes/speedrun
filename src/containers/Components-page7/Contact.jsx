import React from "react";

const Contact = () => (
  <div>
    <div className="download">
      <h2 className="download__title">Free Download at Start Bootstrap!</h2>
      <a
        href="https://startbootstrap.com/themes/creative/"
        className="button-landing button-landing--download"
      >
        DOWNLOAD NOW!
      </a>
    </div>
    <div className="contact" id="contact">
      <h3 className="contact__title">
        Let's Get In Touch!
      </h3>
      <hr className="divider" />
      <p className="contact__p">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
      <div className="contact__cards-wrapper">
        <div className="contact__card">
          <i className="fas fa-phone fa-3x icons-contact" />
          <h5 className="contact__phone">+1 (202) 555-0149</h5>
        </div>
        <div className="contact__card">
          <i className="fas fa-envelope fa-3x icons-contact" />
          <a href="mailto:contact@yourwebsite.com" className="contact__email">contact@yourwebsite.com</a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
