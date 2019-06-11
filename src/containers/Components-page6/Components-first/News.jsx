import React, { Component } from "react";

class News extends Component {
  state = {
    visibleNews: false,
  };

  toggleNews = () => {
    const { visibleNews } = this.state;
    this.setState({ visibleNews: !visibleNews });
  }

  render() {
    const { visibleNews } = this.state;
    return (
      <div className="news">
        <h3 className="news__subtitle">Latest News</h3>
        <div className="news__wrapper">
          <div className="news__card-news">
            <button
              type="button"
              className="news-button"
              onClick={this.toggleNews}
            >
              First
            </button>
            {visibleNews && (
              <div className="news__text-container">
                <p className="news__p">
                  Perspiciaatis unde omnis iste natus error Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur. sit voluptatem
                  accusanti
                </p>
              </div>
            )}
          </div>
          <div className="news__card-news">
            <button
              type="button"
              className="news-button"
              onClick={this.toggleNews}
            >
              Second
            </button>
            {visibleNews && (
              <div className="news__text-container">
                <p className="news__p">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                  Perspiciaatis unde omnis iste natus error sit voluptatem
                  accusanti
                </p>
              </div>
            )}
          </div>
          <div className="news__card-news">
            <button
              type="button"
              className="news-button"
              onClick={this.toggleNews}
            >
              Third
            </button>
            {visibleNews && (
              <div className="news__text-container">
                <p className="news__p">
                  Perspiciaatis Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur. unde omnis iste natus error sit voluptatem
                  accusanti
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
