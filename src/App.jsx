import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <main>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
