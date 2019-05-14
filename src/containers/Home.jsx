import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Link to="/page-1">First Page</Link>
    <Link to="/page-2">Second Page</Link>
    <Link to="/page-3">Third Page</Link>
    <Link to="/page-4">Fourth Page</Link>
  </div>
);

export default Home;
