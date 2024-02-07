import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateConversations } from '../services/AuthServices';
import { AppContext } from '..';

const Dashboard = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(AppContext);

    const [business, setBusiness] = useState({
        businessName: "",
        category: ""
    })

    const disconnectFB = async () => {
        window.FB.getLoginStatus(function (response) {
            window.FB.logout(function (response) {
            });
        });
        localStorage.removeItem("clientID");
        localStorage.removeItem("businessDetails");
        dispatch({ type: "UPDATE_CLIENT_ID", payload: null });
        dispatch({ type: "UPDATE_BUSINESS", payload: null });
        dispatch({ type: "UPDATE_CONVERSATIONS", payload: [] });
        navigate("/connect");
    }

    const fetchConversations = async () => {
        // GET real messages from FB API
        const conversations = [{ user: "U101", message: "Hello World" }];
        const response = await updateConversations(state.userSession.user.email, conversations);
        dispatch({ type: "UPDATE_CONVERSATIONS", payload: response });
        if (response.constructor === Array) {
            navigate("/conversations");
        }
    }

    useEffect(() => {
        const businessData = JSON.parse(localStorage.getItem("businessDetails"));
        if (businessData) {
            dispatch({ type: "UPDATE_BUSINESS", businessData });
        }
        setBusiness(businessData);
    }, [])

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-xl shadow-lg w-96">
                <div className='tracking-wide'>
                    <h1 className="text-xl font-bold text-center mb-4">Facebook Page Integration</h1>
                    <div>Name: <span className='font-[poppins] font-bold tracking-wide'>{business.businessName}</span></div>
                    <div className='font-[poppins] tracking-wide text-sm mt-1 text-gray-600'>Category: <span className='text-black'>{business.category}</span></div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                    <button onClick={disconnectFB} className="w-full bg-red-700 hover:bg-red-800 text-white p-2 rounded-md">
                        Delete Integration
                    </button>
                    <button onClick={fetchConversations} className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">
                        Reply To Messages
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;