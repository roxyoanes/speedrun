import React, { Component } from "react";

import image1 from "../images/landing1.jpg";
import image2 from "../images/landing2.jpg";
import company from "../images/company.jpg";

const images = [image1, image2];

class First extends Component {
state={
  currentImage: 0,
}

componentDidMount() {
  const { currentImage } = this.state;
  const intervalId = setInterval(this.timer, 5000);
  setInterval((() => {
    this.setState({
      currentImage: currentImage === 0 ? 1 : 0,
      intervalId,
    });
  })(), 5000);
}

componentWillUnmount() {
  const { intervalId } = this.state;
  clearInterval(intervalId);
}

timer= () => {
  const { currentImage } = this.state;
  this.setState({ currentImage: currentImage === 0 ? 1 : 0 });
}

render() {
  const { currentImage } = this.state;
  return (
    <div>
      <div className="landing">
        <img src={images[currentImage]} className="landing__img" alt="landing-img" />
      </div>
      <div className="services">
        <div className="services__intro">
          <h2 className="services__title">OUR SERVICES</h2>
          <p className="services__p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident,
            <br />
        doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..
          </p>
        </div>
        <div className="services__cards-container">
          <div className="services__card">
            <i className="fas fa-cloud icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">UI Design</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
          <div className="services__card">
            <i className="fas fa-arrow-circle-right icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">Material</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
          <div className="services__card">
            <i className="fas fa-power-off icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">Bootstrap</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
          <div className="services__card">
            <i className="fas fa-inbox icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">HTML5/CSS3</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
          <div className="services__card">
            <i className="fas fa-exchange-alt icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">Fully Responsive</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
          <div className="services__card">
            <i className="fas fa-expand icon-common" />
            <div className="services__info">
              <h3 className="services__card-title">Mobile</h3>
              <p className="services__card-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="company">
        <div className="company__info">
          <h2 className="company__title">OUR COMPANY</h2>
          <p className="company__description">
            Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada Pellentesque
            ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
          </p>
        </div>
        <p className="company__about">
          Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <div className="company__container">
          <span className="company__list-wrapper">
            <i className="fas fa-angle-right" />
            <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
          </span>
          <span className="company__list-wrapper">
            <i className="fas fa-angle-right" />
            <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
          </span>
          <span className="company__list-wrapper">
            <i className="fas fa-angle-right" />
            <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
          </span>
          <span className="company__list-wrapper">
            <i className="fas fa-angle-right" />
            <h1 className="company__item">Lorem ipsum dolor sit amet</h1>
          </span>
        </div>
        <div className="company__btn-wrapper">
          <a href="#top" className="company__btn">LEARN MORE</a>
        </div>
        <div className="company__img-wrapper">
          <img src={company} alt="laptop" className="company__img" />
        </div>
      </div>
    </div>


  );
}
}


export default First;
