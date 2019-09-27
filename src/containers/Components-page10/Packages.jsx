import React from "react";

const Packages = () => (
  <div className="packages" id="packages">
    <div className="packages__title-wrapper">
      <h2 className="packages__title" data-aos="fade-right" data-aos-duration="1500">Packages</h2>
      <div className="packages__oneline" />
    </div>
    <div className="packages__wrapper" data-aos="fade-up" data-aos-duration="3000">
      <div className="packages__card">
        <h3 className="packages__top">Basic</h3>
        <div className="packages__price">
          <span className="packages__dollar">$</span>
          <span className="packages__price">12</span>
          <span className="packages__time">/mo</span>
        </div>
        <div className="packages__details">
          <strong>300MB</strong>
          <h5 className="packages__details-text">Disk Space</h5>
        </div>
        <div className="packages__details">
          <strong>200MB</strong>
          <h5 className="packages__details-text">Bandwidth</h5>
        </div>
        <div className="packages__details">
          <strong>4</strong>
          <h5 className="packages__details-text">Subdomains</h5>
        </div>
        <div className="packages__details">
          <strong>6</strong>
          <h5 className="packages__details-text">Email Acoounts</h5>
        </div>
        <div className="packages__details">
          <strike>Webmail Support</strike>
        </div>
        <div className="packages__btn-wrapper">
          <button type="button" className="package-btn">BUY NOW</button>
        </div>
      </div>
      <div className="packages__card">
        <h3 className="packages__top">Standard</h3>
        <div className="packages__price">
          <span className="packages__dollar">$</span>
          <span className="packages__price">16</span>
          <span className="packages__time">/mo</span>
        </div>
        <div className="packages__details">
          <strong>600MB</strong>
          <h5 className="packages__details-text">Disk Space</h5>
        </div>
        <div className="packages__details">
          <strong>300MB</strong>
          <h5 className="packages__details-text">Bandwidth</h5>
        </div>
        <div className="packages__details">
          <strong>4</strong>
          <h5 className="packages__details-text">Subdomains</h5>
        </div>
        <div className="packages__details">
          <strong>12</strong>
          <h5 className="packages__details-text">Email Acoounts</h5>
        </div>
        <div className="packages__details">
          <strike>Webmail Support</strike>
        </div>
        <div className="packages__btn-wrapper">
          <button type="button" className="package-btn">BUY NOW</button>
        </div>
      </div>
      <div className="packages__card">
        <h3 className="packages__top">Advance</h3>
        <div className="packages__price">
          <span className="packages__dollar">$</span>
          <span className="packages__price">24</span>
          <span className="packages__time">/mo</span>
        </div>
        <div className="packages__details">
          <strong>1.5GB</strong>
          <h5 className="packages__details-text">Disk Space</h5>
        </div>
        <div className="packages__details">
          <strong>1.2GB</strong>
          <h5 className="packages__details-text">Bandwidth</h5>
        </div>
        <div className="packages__details">
          <strong>14</strong>
          <h5 className="packages__details-text">Subdomains</h5>
        </div>
        <div className="packages__details">
          <strong>26</strong>
          <h5 className="packages__details-text">Email Acoounts</h5>
        </div>
        <div className="packages__details">
          <h5 className="packages__details-text">Webmail Support</h5>
        </div>
        <div className="packages__btn-wrapper">
          <button type="button" className="package-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
);

export default Packages;
