import React from 'react';
import map from 'lodash/map';
import { Switch } from 'react-router-dom';

import { publicRoute, privateRoute, otherRoute } from 'configs/routes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AppRoute from './AppRoute';

function RouteRender() {
  const renderRouteComponent = (routeList, Component = AppRoute) =>
    map(routeList, (routeOptions, index) => (
      <Component key={index} {...routeOptions} />
    ))

  return (
    <Switch>
      {renderRouteComponent(publicRoute, PublicRoute)}
      {renderRouteComponent(privateRoute, PrivateRoute)}
      {renderRouteComponent(otherRoute)}
    </Switch>
  );
}

export default RouteRender;
