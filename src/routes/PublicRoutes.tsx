import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Contact, HomePage, Navbar } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <Navbar />
      <Contact />
    </Route>
  </Switch>
);
