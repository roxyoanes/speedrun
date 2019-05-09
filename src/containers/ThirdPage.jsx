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
      <div className="skills">
        <h2 className="skills__heading">Skills</h2>
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
      </div>
    </div>
  </div>
);

export default ThirdPage;
