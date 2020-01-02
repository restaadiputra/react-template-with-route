import React from 'react';
import map from 'lodash/map';
import { Switch } from 'react-router-dom';

import { publicRoute, privateRoute, otherRoute } from 'configs/routes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AppRoute from './AppRoute';

function RouteRender() {
  const renderPublicRoute = () =>
    map(publicRoute, ({ path, title, component }) => (
      <PublicRoute
        key={path}
        exact
        path={path}
        component={component}
        title={title}
      />
    ));

  const renderPrivateRoute = () =>
    map(privateRoute, ({ path, title, component }) => (
      <PrivateRoute
        key={path}
        exact
        path={path}
        component={component}
        title={title}
      />
    ));

  const renderOtherRoute = () =>
    map(otherRoute, ({ path, title, component }) => (
      <AppRoute 
        key={path} 
        path={path} 
        component={component} 
        title={title} 
      />
    ));

  return (
    <Switch>
      {renderPrivateRoute()}
      {renderPublicRoute()}
      {renderOtherRoute()}
    </Switch>
  );
}

export default RouteRender;
