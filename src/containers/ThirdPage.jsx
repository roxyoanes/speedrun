import React from "react";

import "../styles/third-page.scss";
import "../styles/default-third.scss";

const ThirdPage = () => (
  <div className="third-page">
    <div className="container">
      <div className="navbar">
        <a className="navbar__left" href="#top">
          Clarence Taylor
        </a>
        <div className="navbar__right">
          <button type="button" className="button-menu">
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
      <div className="about">
        <div className="about__name">
          <h2 className="about__heading about__heading--first">CLARENCE</h2>
          <h2 className="about__heading about__heading--second">TAYLOR</h2>
        </div>
        <div className="about__subheading">
          3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 ·
          <a href="mailto:name@email.com" className="about__email">
            NAME@EMAIL.COM
          </a>
        </div>
        <p className="about__description">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className="icons-media">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-github fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-twitter fa-stack-1x fa-inverse" />
          </span>
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
      <hr className="break-line" />
      <div className="experience">
        <div className="experience__card">
          <h2 className="experience__heading">EXPERIENCE</h2>
          <h1 className="experience__job">SENIOR WEB DEVELOPER</h1>
          <h1 className="experience__company">INTELITEC SOLUTIONS</h1>
          <p className="experience__description">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring.
          </p>
          <span className="experience__years">March 2013 - Present</span>
        </div>
        <div className="experience__card">
          <h1 className="experience__job">WEB DEVELOPER</h1>
          <h1 className="experience__company">INTELITEC SOLUTIONS</h1>
          <p className="experience__description">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
          <span className="experience__years">December 2011 - March 2013</span>
        </div>
        <div className="experience__card">
          <h1 className="experience__job">JUNIOR WEB DEVELOPER</h1>
          <h1 className="experience__company">SHOUT! MEDIA PRODUCTIONS</h1>
          <p className="experience__description">
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </p>
          <span className="experience__years">July 2010 - December 2011</span>
        </div>
      </div>
      <hr className="break-line" />
      <div className="education">
        <div className="education__card">
          <h2 className="education__heading">EDUCATION</h2>
          <h1 className="education__institution">
            UNIVERSITY OF COLORADO BOULDER
          </h1>
          <h1 className="education__degree">BACHELOR SCIENCE</h1>
          <p className="education__description">
            Computer Science - Web Development Track GPA: 3.23
          </p>
          <span className="education__years">August 2006 - May 2010</span>
        </div>
        <div className="education__card">
          <h1 className="education__institution">JAMES BUCHANAN HIGH SCHOOL</h1>
          <h1 className="education__degree">TECHNOLOGY MAGNET PROGRAM</h1>
          <p className="education__description">GPA: 3.56</p>
          <span className="education__years">August 2002 - May 2006</span>
        </div>
      </div>
      <hr className="break-line" />
      <div className="skills">
        <h2 className="skills__heading">SKILLS</h2>
        <h1 className="skills__languages">PROGRAMMING LANGUAGES & TOOLS</h1>
        <div className="icons">
          <span className="icons__symbol">
            <i className="fab fa-html5" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-css3-alt" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-css3-alt" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-js-square" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-angular" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-react" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-node-js" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-sass" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-less" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-wordpress" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-gulp" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-grunt" />
          </span>
          <span className="icons__symbol">
            <i className="fab fa-npm" />
          </span>
        </div>
        <div className="skills__workflow">
          <h1 className="skills__subheading">WORKFLOW</h1>
          <ul className="skills__list">
            <li className="skills__item">
              <i className="fas fa-check" />
              Mobile-First, Responsive Design
            </li>
            <li className="skills__item">
              <i className="fas fa-check" />
              Cross Browser Testing & Debugging
            </li>
            <li className="skills__item">
              <i className="fas fa-check" />
              Cross Functional Teams
            </li>
            <li className="skills__item">
              <i className="fas fa-check" />
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </div>
      <hr className="break-line" />
      <div className="interests">
        <h2 className="interests__heading">INTERESTS</h2>
        <p className="interests__description">
          Apart from being a web developer, I enjoy most of my time being
          outdoors. In the winter, I am an avid skier and novice ice climber.
          During the warmer months here in Colorado, I enjoy mountain biking,
          free climbing, and kayaking.
        </p>
        <p className="interests__description">
          When forced indoors, I follow a number of sci-fi and fantasy genre
          movies and television shows, I am an aspiring chef, and I spend a
          large amount of my free time exploring the latest technology
          advancements in the front-end web development world.
        </p>
      </div>
      <hr className="break-line" />
      <div className="awards">
        <h2 className="awards__heading">AWARDS & CERTIFICATIONS</h2>
        <ul className="awards__list">
          <li className="awards__item">
            <i className="fas fa-trophy" />
            Google Analytics Certified Developer
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            Mobile Web Specialist - Google Certification
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            1
            <sup>st</sup>
            Place - University of
            Colorado Boulder -
            Emerging Tech Competition 2009
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            1
            <sup>st</sup>
             Place - University of Colorado Boulder - Adobe Creative Jam 2008
            (UI Design Category)
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            2
            <sup>nd</sup>
             Place - University of Colorado Boulder - Emerging Tech
            Competition 2008
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            1st Place - James Buchanan High School - Hackathon 2006
          </li>
          <li className="awards__item">
            <i className="fas fa-trophy" />
            3
            <sup>rd</sup>
            Place - James Buchanan High School - Hackathon 2005
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ThirdPage;
