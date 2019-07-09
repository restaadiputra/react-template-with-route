import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import map from 'lodash/map';
import { SnackbarProvider } from 'notistack';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import OtherRoute from './OtherRoute';
import { APP_NAME } from '../../configs/app';
import { privateRoute, publicRoute, otherRoute } from '../../configs/routes';
import withTheme from '../../utils/withTheme';

const App = () => (
  <SnackbarProvider hideIconVariant>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Switch>
      {renderPublicRoute()}
      {renderPrivateRoute()}
      {renderOtherRoute()}
    </Switch>
  </SnackbarProvider>
);

const renderPublicRoute = () => map(publicRoute, ({ url, title, component }) => (
  <PublicRoute
    key={url}
    exact
    path={url}
    component={component}
    title={title}
  />
));


const renderPrivateRoute = () => map(privateRoute, ({ url, title, component }) => (
  <PrivateRoute
    key={url}
    exact
    path={url}
    component={component}
    title={title}
  />
));

const renderOtherRoute = () => map(otherRoute, ({ url, title, component }) => (
  <OtherRoute
    key={url}
    path={url}
    component={component}
    title={title}
  />
));



export default withTheme(App);