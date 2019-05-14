import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home, FirstPage, SecondPage, ThirdPage, FourthPage,
} from "./containers";

const Routes = () => (
  <Switch>
    <Route exact path="/page-1" component={FirstPage} />
    <Route exact path="/page-2" component={SecondPage} />
    <Route exact path="/page-3" component={ThirdPage} />
    <Route exact path="/page-4" component={FourthPage} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
