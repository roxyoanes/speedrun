import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12
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
    <Route path="/page-9" component={Page9} />
    <Route path="/page-10" component={Page10} />
    <Route path="/page-11" component={Page11} />
    <Route path="/page-12" component={Page12} />

    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
