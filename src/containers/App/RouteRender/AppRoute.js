import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AppRoute = ({ component: Component, exact=true, ...routeProps }) => {
  console.log('app route: ',routeProps.title, exact)
  return (
  <React.Fragment>
    <Helmet title={routeProps.title} />
    <Route exact={exact} render={props => <Component {...props} />} {...routeProps} />
  </React.Fragment>
)};

AppRoute.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppRoute;
