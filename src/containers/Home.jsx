import React from 'react';

const Home = () => (
  <div className="container">
    <div className="navbar">
      <div className="navbar-brand">Start Bootstrap</div>
      <button className="sign-in" type="button">Sign In</button>
    </div>
    <div className="water-card">
      <div className="text-input">
        <h1 className="text">Build a landing page for  your business or project and generate more leads!</h1>
        <input className="email" type="text" placeholder="Enter you email..." />
        <button className="sign-up" type="button">Sign up!</button>
      </div>
    </div>
    <div className="icons">
      <div className="first-card">
        <i className="fas fa-desktop" />
        <h1 className="first-h1">Fully Responsive</h1>
        <h2 className="first-h2">This theme will look great on any device, no matter the size!</h2>
      </div>
      <div className="second-card">
        <i className="fas fa-layer-group" />
        <h1 className="second-h1">Bootstrap 4 Ready</h1>
        <h2 className="second-h2">Featuring the latest build of the new Bootstrap 4 framework!</h2>
      </div>
      <div className="third-card">
        <i className="far fa-check-circle" />
        <h1 className="third-h1">Easy to Use</h1>
        <h2 className="third-h2">Ready to use with your own content, or customize the source files!</h2>
      </div>
    </div>
    <div className="cards-img">
      <div className="img1">
        <h1 className="title1">Fully Responsive Design</h1>
        <h2 className="text1">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</h2>
      </div>
      <div className="img2" />
      <div className="img3" />
      <div className="img4">
        <h1 className="title2">Updated For Bootstrap 4</h1>
        <h2 className="text2">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</h2>
      </div>
      <div className="img5">
        <h1 className="title3">Easy to Use & Customize</h1>
        <h2 className="text3">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</h2>
      </div>
      <div className="img6" />
    </div>
    <div className="people-img" />
    <div className="sign-up2">
      <input type="text" />
      <button className="sign-up2" type="button">Sign up</button>
    </div>
    <div className="footer" />
  </div>
);

export default Home;
