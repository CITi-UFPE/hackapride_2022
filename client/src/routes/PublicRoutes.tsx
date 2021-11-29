import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact />
  </Switch>
);
