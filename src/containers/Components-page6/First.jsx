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
    <div className="landing">
      <img src={images[currentImage]} className="landing__img" alt="landing-img" />
    </div>

  );
}
}


export default First;
