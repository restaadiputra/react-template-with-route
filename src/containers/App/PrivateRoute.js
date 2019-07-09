import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../configs/routes';
import AppRoute from './AppRoute';

const PrivateRoute = ({ ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    console.log(!isAuthenticated);
    return <Redirect to={routes.home.url} />
  }

  return <AppRoute {...props} />
};

export default PrivateRoute;
