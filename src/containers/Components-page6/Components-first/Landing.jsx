import React, { Component } from "react";

import image1 from "../../images/landing1.jpg";
import image2 from "../../images/landing2.jpg";

const images = [image1, image2];
const texts = [{
  title: "Bootstrap",
  paragraph: "Succes Depends on Originality",
}, {
  title: "Material Design",
  paragraph: "We Create the Opportunities",
}];

class Landing extends Component {
  state = {
    currentOption: 0,
  };

  componentDidMount() {
    const { currentOption } = this.state;
    const intervalId = setInterval(this.timer, 5000);
    setInterval(
      (() => {
        this.setState({
          currentOption: currentOption === 0 ? 1 : 0,
          intervalId,
        });
      })(),
      5000,
    );
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
      <div className="landing">
        <div className="gradient">
          <img
            src={images[currentOption]}
            className="landing__img"
            alt="landing-img"
          />
          <h3 className="landing__title-img">{texts[currentOption].title}</h3>
          <p className="landing__p-img">{texts[currentOption].paragraph}</p>
        </div>
      </div>
    );
  }
}

export default Landing;
