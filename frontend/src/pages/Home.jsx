import React from "react";

function Home() {
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
              <strong>Name:</strong>{" "}
              <span className="bg-gray-300 animate-pulse rounded px-2 py-1 ">
                Loading...
              </span>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <span className="bg-gray-300 animate-pulse rounded px-2 py-1">
                Loading...
              </span>
            </p>
            {/* <p className="text-gray-700"><strong>Member Since:</strong> <span className="bg-gray-300 animate-pulse rounded px-2 py-1">Loading...</span></p> */}
          </div>
        </div>
        {/* Curiosity Section */}
        <h3 className="text-lg font-semibold mb-2 text-center">
          Did You Know?
        </h3>
        <p className="text-gray-600 text-center mb-4">
          You can customize your profile to reflect your unique personality!
          Explore the settings to add a personal touch.
        </p>
        {/* Button to Explore More */}
        <button
          onClick={() => alert("Explore Settings!")}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Explore Settings
        </button>
      </div>
    </div>
  );
}

export default Home;
