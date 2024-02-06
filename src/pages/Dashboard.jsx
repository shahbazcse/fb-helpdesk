import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateConversations } from '../services/AuthServices';
import { AppContext } from '..';

const Dashboard = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(AppContext);
    const pageType = "Amazon Business";

    const disconnectFB = async () => {
        // diconnect from FB API
        dispatch({ type: "UPDATE_CLIENT_ID", payload: null });
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

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-xl shadow-lg w-96">
                <div>
                    <h1 className="text-md font-bold text-center mb-4">Facebook Page Integration</h1>
                    <h2>Integrated Page: <span className='font-[poppins] font-bold tracking-wide'>{pageType}</span></h2>
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