import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRouteAuth = () => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to="/home" replace /> : <Outlet />;
};
