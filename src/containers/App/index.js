import React from 'react';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';

import { APP_NAME } from '../../configs/app';
import withTheme from '../../utils/withTheme';
import RouteRender from './RouteRender';

const App = () => (
  <SnackbarProvider hideIconVariant>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <RouteRender/>
  </SnackbarProvider>
);

export default withTheme(App);