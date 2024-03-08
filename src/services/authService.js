// AuthGuard.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  // Check if the user is authenticated (e.g., verify token)
  const isAuthenticated = !!window.localStorage.getItem('Token');

  if (isAuthenticated) {
    return children; // Render the child components (e.g., Register)
  } else {
    // Redirect to the login page
    return <Navigate to="/login" />;
  }
};

export default AuthGuard;
