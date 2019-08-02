import React, { Component } from "react";

import image1 from "../images/landing81.jpg";
import image2 from "../images/landing82ch.jpg";

const images = [image1, image2];
const texts = [{
  word1: "Enrich",
  word2: "Luxurious",
}, {
  word1: "Elegant",
  word2: "Comfortable",
}];

const pickImage = (number) => {
  switch (number) {
    case 1:
      return image1;
    case 2:
      return image2;
    default:
      return image1;
  }
};

class Landing extends Component {
  state = {
    currentOption: 0,
  };


  componentDidMount() {
    const intervalId = setInterval(this.timer, 5000);
    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  changeNumber = () => {
    const { currentOption } = this.state;
    this.setState(
      { currentOption: currentOption === 0 ? 1 : 0 },
      // we need the new state after updating it on line 47
      // currentOption defined in line 45 still holds the old one
      //
      // eslint-disable-next-line react/destructuring-assignment
      () => pickImage(this.state.currentOption),
    );
  };

  timer = () => {
    const { currentOption } = this.state;
    this.setState({ currentOption: currentOption === 0 ? 1 : 0 });
  };

  render() {
    const { currentOption } = this.state;
    return (
      <div className="landing" id="home">
        <img src={images[currentOption]} className="landing__img" alt="landing-img" />
        <h3 className="landing__word1">{texts[currentOption].word1}</h3>
        <h3 className="landing__word2">{texts[currentOption].word2}</h3>
        <button
          type="button"
          className="button-left"
          onClick={() => this.changeNumber()}
        >
          <span className="fas fa-arrow-circle-left icon-btn" />
        </button>
        <button
          type="button"
          className="button-right"
          onClick={() => this.changeNumber()}
        >
          <span className="fas fa-arrow-circle-right icon-btn" />
        </button>
        <div className="landing__text-wrapper">
          <h3 className="landing__title">Interior Designers and Decorators</h3>
          <p className="landing__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
