import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTHENTICATION_STATE = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_AUTHENTICATION_STATE,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducers = authenticationSlice.reducer;
