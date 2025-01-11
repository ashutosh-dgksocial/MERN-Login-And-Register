import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const url = "http://localhost:3000/api/users/register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate input fields
        if (!name || !email || !password) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await axios.post(url, { name, email, password });
            console.log(response);
            alert(response.data.message);
            // Redirect to login page after successful signup
            navigate("/login");
            // Clear the input fields
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-700 h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            value={name}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white"
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
                            value={password}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md active:scale-75 hover:bg-green-800"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">Already have an account?</p>
                <Link to="/login" className="block mt-2 text-center text-blue-500 hover:underline">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
