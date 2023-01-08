import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, token: "", email: "" };

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      console.log("login", action.payload);
      state.isAuthenticated = !state.isAuthenticated;
      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      console.log("login", action.payload);
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('Email');
      localStorage.removeItem('toggle');
    },
  },
});

export const authAction = authSlice.actions;

console.log("authAction", authAction);

export default authSlice.reducer;
