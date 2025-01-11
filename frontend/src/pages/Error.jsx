import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-red-600">Oops! Something went wrong.</h1>
        <p className="mt-2 text-gray-700">
          We're sorry, but an unexpected error has occurred. Please try again later.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-200"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default Error;
