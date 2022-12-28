import { useState } from "react";
import AuthContext from "./AuthContext";




const AuthProvider = (props) => {
  const initialToken=localStorage.getItem('token')
  const [token,setToken]=useState(initialToken)
  const userLoggedIn=!!token;


  const LoginHandler = (email, token) => {
    setToken(token);
    localStorage.setItem('token',token)
  };
  
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };


  const authContext = {
    token:token,
    isLoggedIn: userLoggedIn,
    LogIn: LoginHandler,
    LogOut: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
