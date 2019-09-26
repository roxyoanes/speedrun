import React, { Component } from "react";

import pic1 from "../images/screen1.jpg";
import pic2 from "../images/screen2.jpg";
import pic3 from "../images/screen3.jpg";
import pic4 from "../images/screen4.jpg";
import pic5 from "../images/screen5.jpg";
import pic6 from "../images/screen6.jpg";
import pic7 from "../images/screen7.jpg";
import pic8 from "../images/screen8.jpg";


const images = [
  {
    image: pic1,
  },
  {
    image: pic2,
  },
  {
    image: pic3,
  },
  {
    image: pic4,
  },
  {
    image: pic5,
  },
  {
    image: pic6,
  },
  {
    image: pic7,
  },
  {
    image: pic8,
  },
];

class Screenshots extends Component {
  state= {
    number: 0,
  }

  changeNumber = (num) => {
    this.setState({
      number: num,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className="screenshots" id="screenshots">
        <div className="screenshots__title-wrapper">
          <h2 className="screenshots__title">Screenshots</h2>
          <div className="screenshots__oneline" />
        </div>
        <div className="screenshots__slides">
          <div className="screenshots__cards-wrapper">
            <div className="screenshots__card">
              <img src={images[number].image} id="pic1" alt="screenshot1" className="screenshots__img" />
            </div>
          </div>
          <div className="screenshots__nav-wrapper">
            {images.map((item, i) => (
              <button
                type="button"
                className={i === number ? "screenshots__bubble-active" : "screenshots__bubble-not-active"}
                onClick={() => this.changeNumber(i)}
              >
                <span className="no" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Screenshots;
