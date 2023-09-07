import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      console.log("", state);
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    logout(state) {
      return {
        ...state,
        isAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
