import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    // Check if user is authenticated (example using localStorage)
    const isAuthenticated = !!localStorage.getItem('token'); // Convert to boolean
    
    return isAuthenticated ? (
        
        <Outlet />
    ) : (
        <Navigate to="/logSignup/" replace />
    );
};

export default PrivateRoutes;

