import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you use react-router-dom for navigation

const ErrorComponent = ({ message = "Oops! The page you're looking for can't be found.", actionLabel = "Go back" }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">{message}</p>
        <p className="text-gray-600 mb-4">
          You might want to check the URL or go back to the homepage.
        </p>
        <div className="space-x-4">
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            {actionLabel}
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400 transition"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
