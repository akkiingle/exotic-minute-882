import { createContext, useReducer } from "react";
 import AuthReducer from "./AuthReducer";

export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [state,dispatch] = useReducer(AuthReducer,{
        isAuth:false,
        token:null,
        loading:false,
        error:false
    });

console.log(state)
    return <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>
}

export default  AuthContextProvider;