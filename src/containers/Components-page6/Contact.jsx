import React from "react";

const Contact = () => (
  <div className="contact">
    <div className="contact__page-title">
      <h2 className="contact__title">CONTACT US</h2>
    </div>
    <div className="contact__about-wrapper">
      <h3 className="contact__text">
        Get
        {" "}
        <span className="contact__text-color">in Touch</span>
      </h3>
      <p className="contact__p">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
      <p className="contact__p">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
    </div>
    <form className="contact__info-wrapper">
      <div className="contact__info-card">
        <input type="text" className="contact__form" id="name" />
        <label HTMLfor="name" className="contact__label">Name</label>
      </div>
      <div className="contact__info-card">
        <input type="text" className="contact__form" id="name" />
        <label HTMLfor="name" className="contact__label">Email</label>
      </div>
      <div className="contact__info-card">
        <textarea type="text" className="contact__form contact__textarea" id="name" />
        <label HTMLfor="name" className="contact__label">Message</label>
      </div>
    </form>
    <div className="contact__btn-wrapper">
      <button type="button" className="button-contact">SEND</button>
    </div>
  </div>
);

export default Contact;
