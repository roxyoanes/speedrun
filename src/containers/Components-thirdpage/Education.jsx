import React from "react";

const Education = () => (
  <div className="education">
    <div className="education__card">
      <h2 className="education__heading">EDUCATION</h2>
      <h1 className="education__institution">UNIVERSITY OF COLORADO BOULDER</h1>
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
);

export default Education;

