import React from "react";

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:'',
    LogIn:()=>{},
    LoggedOut:()=>{}
});

export default AuthContext;

