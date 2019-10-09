import React from "react";

const Landing = () => (
  <div className="landing" id="home">
    <div className="landing__image-container">
      <h1 className="landing__title">ENTREPRENEUR</h1>
      <h3 className="landing__subtitle">Yes - Start, run and grow your business. Eos debitis prominus.</h3>
      <button className="btn-landing" type="button">READ MORE</button>
    </div>
    <div className="landing__part2">
      <h2 className="landing__title2">
        welcome to
        <strong> StartUp - </strong>
        <span className="landing__word-color">Start</span>
        , run and grow your business.
      </h2>
      <p className="landing__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo. Sed quis tortor magna. Maecenas hendrerit feugiat pulvinar. Aenean condimentum quam eu ultricies cursus. Nulla facilisi. In hac habitasse platea dictumst. Ut nec tellus neque. Sed non dui eget arcu elementum facilisis.</p>
    </div>
  </div>
);

export default Landing;
