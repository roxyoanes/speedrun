import React, { Component } from "react";

import pic1 from "../images/client1.jpg";
import pic2 from "../images/client2.jpg";
import pic3 from "../images/client3.jpg";

const clients = [
  {
    image: pic1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    name: "John Doe,",
    company: "Google",
  },
  {
    image: pic2,
    text: "Lorem Ipsum is simply dummy text of the printing and when an unknown printer took a galley of type dummy text of the printing and typesetting industry and scrambled.",
    name: "Glean Michael,",
    company: "CN Technology",
  },
  {
    image: pic3,
    text: "Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type dummy text of the printing.",
    name: "Chris Russel,",
    company: "Facebook",
  },
];

class Clients extends Component {
state = {
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
    <div className="clients" id="clients">
      <h2 className="clients__title">Clients</h2>
      <div className="clients__wrapper">
        <img src={clients[number].image} alt="people" className="clients__img" />
        <p className="clients__p">{clients[number].text}</p>
        <div className="clients__name-container">
          <h5 className="clients__name">{clients[number].name}</h5>
          <h5 className="clients__company">{clients[number].company}</h5>
        </div>
      </div>
      <div className="clients__buttons-wrapper">
        {clients.map((item, i) => (
          <button
            type="button"
            className={i === number ? "clients__bubble-active" : "clients__bubble-not-active"}
            onClick={() => this.changeNumber(i)}
          />
        ))}
      </div>
    </div>
  );
}
}

export default Clients;
