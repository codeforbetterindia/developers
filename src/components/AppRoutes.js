
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import NotFound from './NotFound';

export const AppRoutes = () => (
  <Switch>

    <Route exact path={'/'} component={Home} />

    <Route exact path={'/about-us'} component={AboutUs} />

    <Route component={NotFound} />

  </Switch>
);

export default AppRoutes;
