import React, { useContext, useEffect } from 'react';
import { AppContext } from "..";
import { checkIntegration } from '../services/FBIntegration';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const response = checkIntegration();
        dispatch({ type: "UPDATE_INTEGRATION_STATUS", payload: response });
        if (response.status) navigate("/dashboard");
    }, [])
    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-6 bg-white p-10 rounded-xl shadow-lg w-96">
                <h1 className="text-md font-bold text-center mb-4">Facebook Page Integration</h1>
                <button className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md">
                    Connect Page
                </button>
            </div>
        </div>
    )
}

export default Connect