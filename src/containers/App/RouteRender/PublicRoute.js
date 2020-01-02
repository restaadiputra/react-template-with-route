import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../../configs/routes';
import AppRoute from './AppRoute';

const PublicRoute = ({ ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to={routes.private.path} />
  }

  return <AppRoute {...props} />
};

export default PublicRoute;
