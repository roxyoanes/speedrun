import React, { Component } from "react";

import image1 from "../images/landing1.jpg";
import image2 from "../images/landing2.jpg";

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
    </div>


  );
}
}


export default First;
