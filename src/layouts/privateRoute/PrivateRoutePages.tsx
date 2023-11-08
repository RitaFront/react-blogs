import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutePages = () => {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
};
