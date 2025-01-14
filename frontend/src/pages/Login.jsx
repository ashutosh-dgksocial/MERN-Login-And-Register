import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:3000/api/users/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const response = await axios.post(url, { email, password });
      alert(response.data.msg || "You are logged in"); // Adjusted to 'msg'
      console.log('the response', response.data, response.data?.user?.username)
      // Ensure response structure matches what you expect
      navigate("/home",
        {
          state: {
            username: response.data?.user?.username,
            email: response.data?.user?.email,
          },
        }
      );
      if (response) {
        console.log(response);
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-700 h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-800" // Changed text color for visibility
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-800" // Changed text color for visibility
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-200 to-purple-300 text-white active:scale-75 py-2 rounded-md hover:scale-105 transform transition-transform"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">Don't have an account?</p>
        <Link to="/register" className="block mt-2 text-center text-blue-500 hover:underline ">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
