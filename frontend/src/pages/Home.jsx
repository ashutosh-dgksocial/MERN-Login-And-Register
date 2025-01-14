import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, email } = location.state || {};

  const handleLogout = () => {
    navigate("/login", { state: null });
    alert("You have been logged out!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to Your Profile!
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Profile
        </h2>
        <div className="flex items-center mb-6">
          {/* Skeleton Loader for Face */}
          <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse mr-6 flex items-center justify-center relative">
            {/* Eyes */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
            {/* Mouth */}
            <div className="absolute bottom-1/4 left-1/2 w-12 h-2 bg-gray-600 rounded-full transform -translate-x-1/2"></div>
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              <strong>Name: </strong>
              {username ? (
                <span>{username}</span>
              ) : (
                <span className="bg-gray-300 animate-pulse rounded px-2 py-1">
                  Loading...
                </span>
              )}
            </p>
            <p className="text-gray-700">
              <strong>Email: </strong>
              {email ? (
                <span>{email}</span>
              ) : (
                <span className="bg-gray-300 animate-pulse rounded px-2 py-1">
                  Loading...
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Curiosity Section */}
        {email ? (
          <p className="text-lg font-semibold mb-2 text-center">
            The Magic is your not the AI
          </p>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Did You Know?
            </h3>
            <p className="text-gray-600 text-center mb-4">
              if you Don't login you can't see the
            </p>
          </div>
        )}

        {/* Explore Settings Button */}
        {email ? (
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Logout
          </button>
        ) : (
          <div className="w-full py-2 border border-black text-center">
            GO Login First ↪
          </div>
        )}

        {/* Navigation Links */}
        <div className="flex justify-between mt-10">
          <Link to="/register" className="text-blue-500 underline">
            REGISTER
          </Link>
          <Link to="/login" className="text-blue500 underline">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
