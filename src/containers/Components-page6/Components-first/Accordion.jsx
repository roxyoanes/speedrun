import React, { Component } from "react";

class Accordion extends Component {
  state = {
    open: false,
  };

  toggleAccordion = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { btnText, text, icon } = this.props;
    const { open } = this.state;
    return (
      <div className="accordion">
        <div className={open ? "accordion__button accordion__button--open" : "accordion__button"} role="button" onClick={this.toggleAccordion}>
          <i className={icon} />
          {btnText}
        </div>
        {open ? <p className="accordion__p">{text}</p> : <p className="accordion__p-closed" />}
      </div>
    );
  }
}

export default Accordion;
