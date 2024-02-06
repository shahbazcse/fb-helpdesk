import axios from "axios";
const sign = require("jwt-encode");

export const userSignup = async (formData, rememberMe) => {
    try {
        const { data: user } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/signup`, formData);
        const token = sign({ _id: response.user._id }, process.env.REACT_APP_JWT_SECRET);

        const session = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };
        if (rememberMe) localStorage.setItem("session", JSON.stringify(session));
        return session;
    } catch (e) {
        console.log("Error", e.message);
    }
}

export const userLogin = async (formData, rememberMe) => {
    try {
        const { data: { user } } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/login`, formData);

        const token = sign({ _id: user._id }, process.env.REACT_APP_JWT_SECRET);
        const session = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        };
        if (rememberMe) localStorage.setItem("session", JSON.stringify(session));
        return session;
    } catch (e) {
        console.log("Error", e.message);
    }
}

export const updateClientID = async () => {
    try {

    } catch (e) {
        console.log("Error", e.message);
    }
}

export const updateConversations = async () => {
    try {

    } catch (e) {
        console.log("Error", e.message);
    }
}

export const checkAuth = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    return session.token;
}