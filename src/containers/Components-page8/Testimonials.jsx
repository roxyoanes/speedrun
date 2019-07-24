import React, { Component } from "react";

const texts = [{
  paragraph: "Vitae massa semper aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis consectetur adipiscing elit..",
  name: "JOHN DOW",
}, {
  paragraph: "Praesent eget risus vitae massa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis consectetur adipiscing elit..",
  name: "KRISTEAN VELNLY",
}, {
  paragraph: "Consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis consectetur adipiscing elit..",
  name: "MARKUS VENNY",
}, {
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis consectetur adipiscing elit..",
  name: "CHRIS MENSTL",
}];

class Testimonials extends Component {
  state = {
    currentOption: 0,
  }

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
    this.setState({ currentOption: currentOption < 3 ? currentOption + 1 : 0 });
  };


  render() {
    const { currentOption } = this.state;
    return (
      <div className="testimonials">
        <div className="testimonials__text-wrapper">
          <p className="testimonials__p">{texts[currentOption].paragraph}</p>
          <h3 className="testimonials__name">{texts[currentOption].name}</h3>
        </div>
        <div className="testimonials__bubbles-wrapper">
          {texts.map((item, i) => (
            <span className={i === currentOption ? "testimonials__bubble-active" : "testimonials__bubble-not-active"} />
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
