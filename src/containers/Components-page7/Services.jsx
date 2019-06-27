import React from "react";

const Services = () => (
  <div className="services">
    <h2 className="services__title">At Your Service</h2>
    <hr className="divider" />
    <div className="services__wrapper">
      <div className="services__card">
        <i className="fas fa-4x fa-gem icon-services" />
        <h3 className="services__card-title">Sturdy Themes</h3>
        <p className="services__card-p">Our themes are updated regularly to keep them bug free!</p>
      </div>
      <div className="services__card">
        <i className="fas fa-4x fa-laptop-code icon-services" />
        <h3 className="services__card-title">Up to Date</h3>
        <p className="services__card-p">All dependencies are kept current to keep things fresh.</p>
      </div>
      <div className="services__card">
        <i className="fas fa-4x fa-globe icon-services" />
        <h3 className="services__card-title">Ready to Publish</h3>
        <p className="services__card-p">You can use this design as is, or you can make changes!</p>
      </div>
      <div className="services__card">
        <i className="fas fa-4x fa-heart icon-services" />
        <h3 className="services__card-title">Made with Love</h3>
        <p className="services__card-p">Is it really open source if it's not made with love?</p>
      </div>
    </div>
  </div>
);

export default Services;
