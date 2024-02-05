import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const pageType = "Amazon Business";
    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-xl shadow-lg w-96">
                <div>
                    <h1 className="text-md font-bold text-center mb-4">Facebook Page Integration</h1>
                    <h2>Integrated Page: <span className='font-[poppins] font-bold tracking-wide'>{pageType}</span></h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                    <button className="w-full bg-red-700 hover:bg-red-800 text-white p-2 rounded-md">
                        Delete Integration
                    </button>
                    <button onClick={() => navigate("/conversations")} className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">
                        Reply To Messages
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;