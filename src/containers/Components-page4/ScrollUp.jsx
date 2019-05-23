import React from "react";
import PropTypes from "prop-types";

const ScrollUp = ({ scrolled }) => (
  <a href="#top" className="scroll">
    <button type="button" className={scrolled ? "scrolled" : "button-scroll"}>
      <i className="fas fa-arrow-up" />
    </button>
  </a>
);
ScrollUp.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default ScrollUp;
