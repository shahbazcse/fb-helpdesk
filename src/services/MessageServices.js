import axios from "axios";

const MESSAGE_API = "https://graph.facebook.com/v19.0/";

let conversations = [];

export const getConversationList = async (page_access_token, page_id) => {
    const response =
        await axios.get(`${MESSAGE_API}/${page_id}/conversations?platform=MESSENGER
    &access_token=${page_access_token}`);
    return response.data.data;
};

export const getMessagesInConversation = async (
    page_access_token,
    conversation_id
) => {
    const response =
        await axios.get(`${MESSAGE_API}/${conversation_id}/conversations?fields=messages
    &access_token=${page_access_token}`);
    return response.data.messages.data;
};

export const getMessageDetails = async (page_access_token, message_id) => {
    const response =
        await axios.get(`${MESSAGE_API}/${message_id}?fields=id,created_time,from,to,message
    &access_token=${page_access_token}`);
    return response.data;
};

export const sendMessage = (page_access_token, page_id, PSID, messageText) => {
    window.FB.api(
        `${MESSAGE_API}/${page_id}/messages?access_token=${page_access_token}`,
        "POST",
        {
            recipient: {
                id: `${PSID}`,
            },
            messaging_type: "RESPONSE",
            message: {
                text: `${messageText}`,
            },
        },
        function (response) {
            if (response && !response.error) {
                return response.data;
            } else {
                console.error(response.error.message);
            }
        }
    );
};

export const getAllConversations = async () => {
    return conversations;
}