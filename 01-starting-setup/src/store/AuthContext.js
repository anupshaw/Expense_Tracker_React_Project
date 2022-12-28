import React from "react";

const AuthContext=React.createContext({
    isLoggedIn:'',
    LogIn:()=>{},
    LoggedOut:()=>{}
});

export default AuthContext;

