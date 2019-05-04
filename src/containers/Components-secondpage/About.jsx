import React from "react";

import "../../styles/second-page.scss";
import "../../styles/default.scss";

import mountain from "../images/mountain.jpg";
import airplane from "../images/airplane.jpg";
import laptop from "../images/laptop.jpg";
import mountain2 from "../images/mountain2.jpg";

const About = () => (
  <div id="about" className="about">
    <h2 className="about__title">ABOUT</h2>
    <h1 className="about__sub-title">
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <div className="timeline">
      <div className="container1 card">
        <div className="timeline__content-1">
          <div className="timeline__circle">
            <img src={mountain} className="timeline__img" alt="" />
          </div>
          <div className="timeline__text-box">
            <h4 className="timeline__h4">2009-2011</h4>
            <h3 className="timeline__h3">Our Humble Beginnings</h3>
            <p className="timeline__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
      </div>
      <div className="container2 card">
        <div className="timeline__content-2">
          <div className="timeline__circle">
            <img src={airplane} className="timeline__img" alt="" />
          </div>
          <div className="timeline__text-box">
            <h4 className="timeline__h4">March 2011</h4>
            <h3 className="timeline__h3">An Agency is Born</h3>
            <p className="timeline__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
      </div>
      <div className="container3 card">
        <div className="timeline__content-3">
          <div className="timeline__circle">
            <img src={laptop} className="timeline__img" alt="" />
          </div>
          <div className="timeline__text-box">
            <h4 className="timeline__h4">December 2012</h4>
            <h3 className="timeline__h3">Transition to Full Service</h3>
            <p className="timeline__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
      </div>
      <div className="container4 card">
        <div className="timeline__content-4">
          <div className="timeline__circle">
            <img src={mountain2} className="timeline__img" alt="" />
          </div>
          <div className="timeline__text-box">
            <h4 className="timeline__h4">July 2014</h4>
            <h3 className="timeline__h3">Phase Two Expansion</h3>
            <p className="timeline__p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!
            </p>
          </div>
        </div>
      </div>
      <div className="container5 card">
        <div className="timeline__circle-last">
          <h4 className="timeline__last">
            Be Part
            {" "}
            <br />
            Of Our
            {" "}
            <br />
            Story!
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default About;
