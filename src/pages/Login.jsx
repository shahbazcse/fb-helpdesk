import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "..";
import { userLogin } from "../services/AuthServices";

const Login = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AppContext);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async () => {
        const response = await userLogin(form, rememberMe);
        dispatch({ type: "UPDATE_USER_SESSION", payload: response });
        if (response.token) {
            navigate("/connect");
        }
    }

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Login to your account</h1>
                <div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="manoj@richpanel.com"
                            type="email"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: String(e.target.value) })}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            placeholder="**********"
                            type="password"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: String(e.target.value) })}
                        />
                    </div>
                    <div className="flex items-center mb-6">
                        <input type="checkbox" id="remember-me" value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label
                            className="ml-2 block text-sm text-gray-900"
                            htmlFor="remember-me"
                        >
                            Remember Me
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <button onClick={handleLogin} className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">
                            Login
                        </button>
                        <div className="flex justify-center items-center gap-1 mt-4 text-sm text-gray-600">
                            New to Helpdesk?{" "}
                            <div
                                onClick={() => navigate("/signup")}
                                className="text-blue-900 hover:underline cursor-pointer"
                                href="#"
                            >
                                Sign Up
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;