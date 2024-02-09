import axios from "axios";

// const sendMessage = async (page_id, page_access_token, PSID, messageText) => {
//     console.log(page_id, page_access_token, PSID, messageText);
//     const response = new Promise((resolve, reject) => {
//         (async () => {
//             const res = await axios.get(`https://graph.facebook.com/v19.0/${page_id}/messages
//             ?recipient={id:${PSID}}
//             &message={text:${messageText}}
//             &messaging_type=RESPONSE
//             &access_token=${page_access_token}`)
//             if (res && !res.error) {
//                 console.log(res);
//                 resolve(res);
//             } else {
//                 reject(res.error)
//             }
//         })();
//     });
//     return response;
// }

export const getPageDetails = () => {
    let page_access_token = null;
    let page_id = null;

    const response = new Promise((resolve, reject) => {
        window.FB.api("/me/accounts", function (response) {
            if (response && !response.error) {
                page_access_token = response.data[0].access_token;
                page_id = response.data[0].id;
                localStorage.setItem(
                    "businessDetails",
                    JSON.stringify({
                        businessName: response.data[0].name,
                        category: response.data[0].category,
                    })
                );
                resolve({
                    page_access_token,
                    page_id,
                    businessName: response.data[0].name,
                    category: response.data[0].category,
                });
            } else {
                console.error(response.error);
            }
        });
    });

    return response;
};