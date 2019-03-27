import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <h1>hello world!</h1>
        <p>If you see this everything is working!</p>
      </div>
      <ul className="left" />
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
