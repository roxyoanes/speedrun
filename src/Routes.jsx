import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8,
} from "./containers";

const Routes = () => (
  <Switch>
    <Route exact path="/page-1" component={Page1} />
    <Route exact path="/page-2" component={Page2} />
    <Route exact path="/page-3" component={Page3} />
    <Route exact path="/page-4" component={Page4} />
    <Route exact path="/page-5" component={Page5} />
    <Route path="/page-6" component={Page6} />
    <Route path="/page-7" component={Page7} />
    <Route path="/page-8" component={Page8} />

    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
