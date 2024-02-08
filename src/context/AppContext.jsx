import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const reducerFn = (state, action) => {
        switch (action.type) {
            case "UPDATE_USER_SESSION":
                return {
                    ...state,
                    userSession: action.payload,
                };
            case "UPDATE_CLIENT_ID":
                return {
                    ...state,
                    clientID: action.payload,
                };
            case "UPDATE_BUSINESS":
                return {
                    ...state,
                    businessData: action.payload,
                };
            case "UPDATE_CONVERSATIONS":
                return {
                    ...state,
                    conversations: action.payload,
                };
            case "UPDATE_INTEGRATION_STATUS":
                return {
                    ...state,
                    isIntegrated: {
                        status: action.payload.status,
                        authResponse: action.payload.authResponse,
                    },
                    clientID: action.payload.authResponse.userID,
                };
            default:
                return state;
        }
    };

    const initialState = {
        userSession: null,
        clientID: null,
        businessData: {
            businessName: "",
            category: ""
        },
        conversations: [],
        isIntegrated: {
            status: false,
            authResponse: null,
        },
    };

    const setDefault = () => {
        const business = JSON.parse(localStorage.getItem("businessDetails"));
        dispatch({ type: "UPDATE_BUSINESS", payload: business })
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);

    useEffect(() => {
        setDefault();
    }, [])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
