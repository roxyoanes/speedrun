import React, { Component } from "react";

const tests = [
  {
    id: 1,
    name: "Test 1",
    text:
      "Ande omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    className: "test-item",
  },
  {
    id: 2,
    name: "Test 2",
    text:
      "Terspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    className: "test-item",
  },
  {
    id: 3,
    name: "Test 3",
    text:
      "Perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    className: "test-item",
  },
];

class Features extends Component {
  state = {
    activeTest: 1,
  };

  handleClick = (id) => {
    this.setState({ activeTest: id });
  };

  render() {
    const { activeTest } = this.state;
    return (
      <div className="features">
        <h3 className="features__subtitle">Features</h3>
        <div className="features__tests-card">
          <div className="features__buttons-wrapper">
            {tests.map(item => (
              <div key={item.id}>
                <div>
                  <button
                    type="button"
                    onClick={() => this.handleClick(item.id)}
                    className="button-features"
                  >
                    {item.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="features__text">{tests[activeTest - 1].text}</div>
        </div>
      </div>
    );
  }
}

export default Features;
