import React from 'react';

import '../../styles/second-page.scss';
import '../../styles/default.scss';

import envato from '../images/envato.jpg';
import designmodo from '../images/designmodo.jpg';
import themeforest from '../images/themeforest.jpg';
import creative from '../images/creative-market.jpg';

const Sponsors = () => (
  <div className="sponsors">
    <img src={envato} className="img" alt="" />
    <img src={designmodo} className="img" alt="" />
    <img src={themeforest} className="img" alt="" />
    <img src={creative} className="img" alt="" />
  </div>
);

export default Sponsors;
