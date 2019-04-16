import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, SecondPage } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/page-2" component={SecondPage} />
  </Switch>
);

export default Routes;
