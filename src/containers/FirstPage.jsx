import React from "react";

import "../styles/home.scss";

import picture1 from "./images/testimonials-1.jpg";
import picture2 from "./images/testimonials-2.jpg";
import picture3 from "./images/testimonials-3.jpg";

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="navbar">
        <div className="navbar-brand">Start Bootstrap</div>
        <button className="sign-in" type="button">
          Sign In
        </button>
      </div>
      <div className="water-card">
        <div className="overlay1" />
        <div className="text-input">
          #
          <h1 className="text">
            Build a landing page for your business or project and generate more
            leads!
          </h1>
          <input
            className="email"
            type="text"
            placeholder="Enter you email..."
          />
          <button className="sign-up" type="button">
            Sign up!
          </button>
        </div>
      </div>
      <div className="icons">
        <div className="first-card">
          <i className="fas fa-desktop" />
          <h2 className="first-h1">Fully Responsive</h2>
          <p className="first-h2">
            This theme will look great on any device, no matter the size!
          </p>
        </div>
        <div className="second-card">
          <i className="fas fa-layer-group" />
          <h2 className="second-h1">Bootstrap 4 Ready</h2>
          <p className="second-h2">
            Featuring the latest build of the new Bootstrap 4 framework!
          </p>
        </div>
        <div className="third-card">
          <i className="far fa-check-circle" />
          <h2 className="third-h1">Easy to Use</h2>
          <p className="third-h2">
            Ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
      <div className="cards-img">
        <div className="img1">
          <div className="card1">
            <h2 className="title1">Fully Responsive Design</h2>
            <p className="text1">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
        </div>
        <div className="img2" />
        <div className="img3" />
        <div className="img4">
          <div className="card4">
            <h2 className="title2">Updated For Bootstrap 4</h2>
            <p className="text2">
              Newly improved, and full of great utility classes, Bootstrap 4 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 4!
            </p>
          </div>
        </div>
        <div className="img5">
          <div className="card5">
            <h2 className="title3">Easy to Use & Customize</h2>
            <p className="text3">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </div>
        <div className="img6" />
      </div>
      <div className="people-img">
        <h1 className="title-people">What people are saying...</h1>
        <div className="all-people">
          <div className="person1">
            <img src={picture1} className="margaret" alt="" />
            <h2 className="name1">Margaret E.</h2>
            <p className="p-name1">"This is fantastic! Thanks so much guys!"</p>
          </div>
          <div className="person2">
            <img src={picture2} className="fred" alt="" />
            <h2 className="name2">Fred S.</h2>
            <p className="p-name2">
              "Bootstrap is amazing. I've been using it to create lots of super
              nice landing pages."
            </p>
          </div>
          <div className="person3">
            <img src={picture3} className="sarah" alt="" />
            <h2 className="name3">Sarah W.</h2>
            <p className="p-name3">
              &quot;Thanks so much for making these free resources available to
              us!&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="sign-up2">
        <div className="overlay" />
        <div className="text-input2">
          <div className="h1-text">Ready to get started? Sign up now!</div>
          <div className="input-button">
            <input
              className="email2"
              type="text"
              placeholder="Enter you email..."
            />
            <button className="signup-btn" type="button">
              Sign up!
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left" />
        <ul className="inline-list">
          <li className="item1">About</li>
          <li className="item2">⋅</li>
          <li className="item3">Contact</li>
          <li className="item4">⋅</li>
          <li className="item5">Terms of Use</li>
          <li className="item6">⋅</li>
          <li className="item7">Privacy Policy</li>
        </ul>
        <p className="rights">© Your Website 2019. All Rights Reserved.</p>
        <div className="footer-right">
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter-square" />
          <i className="fab fa-instagram" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
