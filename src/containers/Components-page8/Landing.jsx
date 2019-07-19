import React, { Component } from "react";

import image1 from "../images/landing81.jpg";
import image2 from "../images/landing82.jpg";

const images = [image1, image2];
const texts = [{
    word1: "Enrich",
    word2: "Luxurious",
}, {
    word1: "Elegant",
    word2: "Comfortable",
}];

class Landing extends Component{
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

    render(){
        const { currentOption } = this.state;
        return(
            <div className="landing">
              <div class="landing__images-switch">
               <img src={images[currentOption]} className="landing__img" alt="landing-img" />
                <h3 className="landing__word1">{texts[currentOption].word1}</h3>
                <h3 className="landing__word2">{texts[currentOption].word2}</h3>
              </div>
               
            </div>
        );
    }
}

export default Landing;