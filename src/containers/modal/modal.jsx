import React from 'react';

import '../../styles/default.scss';
import './modal.scss';

import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/04.jpg';
import pic5 from '../images/05.jpg';
import pic6 from '../images/06.jpg';

const modal = props => (
  <div>
    <div
      className="modal-wrapper"
      style={{
        opacity: '1',
      }}
    >
      <div className="modal-header">
        <h2>PROJECT NAME</h2>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <span className="close-modal-btn" onClick={props.close}>×</span>
      </div>
      <div className="modal-body">
        <img src={pic1} alt="img" />
        <p>a</p>
      </div>
    </div>
  </div>
);

export default modal;
