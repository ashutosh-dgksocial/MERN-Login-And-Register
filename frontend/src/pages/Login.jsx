import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState(""); // Initializing state with an empty string
    const [password, setPassword] = useState(""); // Initializing state with an empty string
    const navigate = useNavigate();
    const url = "http://localhost:3000/api/users/login";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }
        try {
            const response = await axios.post(url, { email, password }); // Use the variable 'url'
            console.log(response);
            alert(response.data.message || "You are logged in"); // Correct alert message
            navigate("/home"); // Redirect to a different page after successful login
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
        }
    }

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
                            type="email" // Changed to "email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='mt-1 block w-full p-2 border border-gray-300 rounded-md text-white' // Changed text color for visibility
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='mt-1 block w-full p-2 border border-gray-300 rounded-md text-white' // Changed text color for visibility
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">Don't have an account?</p>
                <Link to="/register" className="block mt-2 text-center text-blue-500 hover:underline">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
