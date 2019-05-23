import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Link to="/page-1">Page1</Link>
    <Link to="/page-2">Page2</Link>
    <Link to="/page-3">Page3</Link>
    <Link to="/page-4">Page4</Link>
    <Link to="/page-5">Page5</Link>
  </div>
);

export default Home;
