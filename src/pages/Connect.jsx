import React, { useContext, useEffect } from "react";
import { AppContext } from "..";
import { useNavigate } from "react-router-dom";
import { updateClientID } from "../services/AuthServices";
import { getPage } from "../services/PageSubscriptions";
import { getConversationList } from "../services/MessageServices";

const Connect = () => {
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const processResponse = async (response) => {
        dispatch({ type: "UPDATE_INTEGRATION_STATUS", payload: response });
        const clientID = await updateClientID(
            state.userSession.user.email,
            response.authResponse.userID
        );
        dispatch({ type: "UPDATE_CLIENT_ID", payload: clientID });
        localStorage.setItem("clientID", JSON.stringify(clientID));
        if (clientID) {
            navigate("/dashboard");
        }
    };

    const connectFB = () => {
        window.FB.login(
            function (response) {
                if (response.status === "connected") {
                    getPage()
                        .then((res) => {
                            dispatch({ type: "UPDATE_BUSINESS", payload: res });
                            // getConversationList(res.page_access_token, res.page_id);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                    processResponse(response);
                }
            },
            { scope: "pages_show_list" }
        );
    };

    const userLogout = () => {
        localStorage.clear("session");
        navigate("/login");
    }

    useEffect(() => {
        const clientID = JSON.parse(localStorage.getItem("clientID"));
        if (clientID) {
            dispatch({ type: "UPDATE_CLIENT_ID", payload: clientID });
            navigate("/dashboard");
        } else navigate("/connect");
    }, []);

    return (
        <div className="flex h-screen bg-[#1E4D91] items-center justify-center font-[raleway]">
            <div className="flex flex-col items-center justify-center gap-6 bg-white p-10 rounded-xl shadow-lg w-96">
                <h1 className="text-md font-bold text-center mb-4">
                    Facebook Page Integration
                </h1>
                {/* <div
                    className="fb-login-button"
                    data-width=""
                    data-size=""
                    data-button-type=""
                    data-layout=""
                    data-auto-logout-link="false"
                    data-use-continue-as="false"
                >
                    <button
                        onClick={connectFB}
                        className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md"
                    >
                        Connect Page
                    </button>
                </div> */}
                <button
                    onClick={connectFB}
                    className="w-full bg-[#1E4D91] hover:bg-blue-900 text-white p-2 rounded-md"
                >
                    Connect Page
                </button>
                <button
                    onClick={userLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Connect;
