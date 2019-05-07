import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

const App = () => (
  <BrowserRouter>
    <main>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
