/* eslint-disable react/prop-types */
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [isAuthenticated] = useLocalStorage('email');

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
