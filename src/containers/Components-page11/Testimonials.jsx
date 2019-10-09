import React, { Component } from "react";

import pic1 from "../images/test1.jpg";
import pic2 from "../images/test2.jpg";
import pic3 from "../images/test3.jpg";

const texts = [{
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.",
  img: pic1,
}, {
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.",
  img: pic2,
}, {
  paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!",
  img: pic3,
}];


class Testimonials extends Component {
  state = {
    currentOption: 0,
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 4000);
    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  changeNumber = (num) => {
    this.setState({
      currentOption: num,
    });
  };

  timer = () => {
    const { currentOption } = this.state;
    this.setState({ currentOption: currentOption < 2 ? currentOption + 1 : 0 });
  };


  render() {
    const { currentOption } = this.state;
    return (
      <div className="testimonials" id="testimonials">
        <h3 className="testimonials__title">
          Clients Testimonials
        </h3>
        <div className="testimonials__container">
          <img src={texts[currentOption].img} className="testimonials__img" alt="people" />
          <div className="testimonials__text-wrapper">
            <p className="testimonials__p">
              <i className="fas fa-quote-left quotes" />
              {texts[currentOption].paragraph}
            </p>
            <small className="testimonials__name">-Someone famous</small>
          </div>
        </div>
        <div className="testimonials__bubbles-wrapper">
          {texts.map((item, i) => (
            <button type="button" className={i === currentOption ? "testimonials__bubble-active" : "testimonials__bubble-not-active"} onClick={() => this.changeNumber(i)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
