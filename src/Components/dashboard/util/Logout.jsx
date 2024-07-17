import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        // Redirect to the login/signup page
        navigate('/logSignup');
    }, [navigate]);

    return null; // Since we are redirecting immediately, no need to render anything
};

export default Logout;
