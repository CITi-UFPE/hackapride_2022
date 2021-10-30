import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Awards, HomePage } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      {/* <HomePage /> */}
      <Awards />
    </Route>
  </Switch>
);
