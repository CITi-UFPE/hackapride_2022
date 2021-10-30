import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Contact, HomePage } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      {/* <HomePage /> */}
      <Contact />
    </Route>
  </Switch>
);
