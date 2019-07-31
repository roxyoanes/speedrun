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
        <div className="landing__text-wrapper">
          <h3 className="landing__title">Interior Designers and Decorators</h3>
          <p className="landing__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
