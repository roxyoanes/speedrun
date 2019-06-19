import React, { Component } from "react";
import Gallery from "../Components-page5/Gallery";
import Modal5 from "../modal/modal5";

class Portfolio extends Component {
  state = {
    isShowing: false,
    modalNumber: 0,
  };

  openModalHandler = (number) => {
    this.setState({
      isShowing: true,
      modalNumber: number,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    const { isShowing, modalNumber } = this.state;
    return (
      <div className="portfolio">
        <div className="portfolio__page-title">
          <h2 className="portfolio__title">PORTFOLIO</h2>
        </div>
        <div className="portfolio__about-wrapper">
          <h3 className="portfolio__text">
            Our
            {" "}
            <span className="portfolio__text-color">Gallery</span>
          </h3>
          <p className="portfolio__p">
            Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          </p>
          <p className="portfolio__p">
            Sed ut perspiciaatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          </p>
        </div>
        <Gallery openModalHandler={this.openModalHandler} />
        {isShowing ? (
          <Modal5 number={modalNumber} className="modal" close={this.closeModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default Portfolio;
