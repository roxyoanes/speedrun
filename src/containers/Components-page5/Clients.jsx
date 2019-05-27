import React from "react";


import clientlogo1 from "../images/clientlogo1.png";
import clientlogo2 from "../images/clientlogo2.png";
import clientlogo3 from "../images/clientlogo3.png";
import clientlogo4 from "../images/clientlogo4.png";

const Clients = () => (
  <div className="clients">
    <h2 className="clients__heading">CLIENTS</h2>
    <div className="clients__clients-container">
      <img src={clientlogo1} className="clients__img" alt="client-logo" />
      <img src={clientlogo2} className="clients__img" alt="client-logo" />
      <img src={clientlogo3} className="clients__img" alt="client-logo" />
      <img src={clientlogo4} className="clients__img" alt="client-logo" />
    </div>
  </div>
);

export default Clients;
