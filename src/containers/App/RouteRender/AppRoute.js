import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AppRoute = ({ component: Component, ...routeProps }) => (
  <React.Fragment>
    <Helmet title={routeProps.title || ''} />
    <Route render={props => <Component {...props} />} {...routeProps} />
  </React.Fragment>
);

AppRoute.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppRoute;
