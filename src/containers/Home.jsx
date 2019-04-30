import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Link to="/page-1">First Page</Link>
    <Link to="/page-2">Second Page</Link>
  </div>
);

export default Home;
