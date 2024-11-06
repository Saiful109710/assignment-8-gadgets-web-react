import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6">We can't seem to find the page you're looking for.</p>
            <button 
                onClick={goHome} 
                className="px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;

