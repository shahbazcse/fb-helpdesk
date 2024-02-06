import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const reducerFn = (state, action) => {
        switch (action.type) {
            case "UPDATE_USER_SESSION":
                return {
                    ...state,
                    userSession: action.payload
                }
            case "UPDATE_CLIENT_ID":
                return {
                    ...state,
                    clientID: action.payload
                }
            case "UPDATE_CONVERSATIONS":
                return {
                    ...state,
                    conversations: action.payload
                }
            case "UPDATE_INTEGRATION_STATUS":
                return {
                    ...state,
                    isIntegrated: {
                        status: action.payload.status,
                        authResponse: action.payload.authResponse
                    }
                }
            default:
                return state
        }
    }

    const initialState = {
        userSession: null,
        clientID: null,
        conversations: [],
        isIntegrated: {
            status: false,
            authResponse: null
        },
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);

    console.log(state);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}