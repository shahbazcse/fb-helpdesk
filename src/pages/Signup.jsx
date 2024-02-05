import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input id="name" placeholder="Manoj Kumar" type="text" className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input id="email" placeholder="manoj@richpanel.com" type="email" className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input id="password" placeholder="**********" type="password" className="w-full border border-gray-400 p-2 rounded-md" />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" id="remember-me" />
                        <label
                            className="ml-2 block text-sm text-gray-900"
                            htmlFor="remember-me"
                        >
                            Remember Me
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">Sign Up</button>
                        <div className="flex justify-center items-center gap-1 mt-4 text-sm text-gray-600">
                            Already have an account?{" "}
                            <div onClick={() => navigate('/login')} className="text-blue-900 hover:underline cursor-pointer" href="#">
                                Login
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;