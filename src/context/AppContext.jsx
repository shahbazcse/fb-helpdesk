import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const reducerFn = (state, action) => {
        switch (action.type) {
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
        isIntegrated: {
            status: false,
            authResponse: null
        },
    }

    const [state, dispatch] = useReducer(reducerFn, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}