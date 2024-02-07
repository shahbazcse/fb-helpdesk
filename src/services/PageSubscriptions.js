const subscribePage = (page_id, page_access_token) => {
    const response = new Promise((resolve, reject) => {
        window.FB.api(
            `/${page_id}/subscribed_apps`,
            "POST",
            {
                subscribed_fields: [
                    "messages",
                ],
                access_token: page_access_token,
            },
            function (response) {
                if (response && !response.error) {
                    resolve({
                        page_access_token,
                        page_id,
                        response,
                    });
                } else {
                    reject(response.error.message);
                }
            }
        );
    });
    return response;
};

export const getPage = () => {
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
                subscribePage(page_id, page_access_token)
                    .then((res) => {
                        resolve({
                            page_access_token,
                            page_id,
                            pageResponse: res.response,
                            businessName: response.data[0].name,
                            category: response.data[0].category,
                        });
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                console.error(response.error);
            }
        });
    });

    return response;
};
