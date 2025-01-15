import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Assuming you're using Context for user state
import axios from "axios";

function Profile() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // This effect runs when the page is loaded (including refresh)
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  
    if (token) {
      axios
        .get("http://localhost:3000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser({
            username: response.data.username,
            email: response.data.email,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          setLoading(false);
        });
    } else {
      setLoading(false); // No token, stop loading and show login UI
    }
  }, [setUser]);
  

  const handleLogout = () => {
    // Delete the token cookie on logout
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    localStorage.removeItem('user');
    setUser(null); // Reset the user context state
    navigate("/login"); // Redirect to the login page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>

        {user ? (
          <>
            <p className="mb-4">
              <strong>Username: </strong> {user.username}
            </p>
            <p className="mb-6">
              <strong>Email: </strong> {user.email}
            </p>

            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-center">You are not logged in.</p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/login"
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
