import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, FirstPage, SecondPage } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/page-1" component={FirstPage} />
    <Route exact path="/page-2" component={SecondPage} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
