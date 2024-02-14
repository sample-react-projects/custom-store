import { createSlice } from ".";

const INITIAL_AUTHENTICATION_STATE = { isAuthenticated: false };

export const authenticationSlice = createSlice<
  typeof INITIAL_AUTHENTICATION_STATE
>("authentication", INITIAL_AUTHENTICATION_STATE, {
  login: () => {
    return { isAuthenticated: true };
  },
  logout: () => {
    return { isAuthenticated: false };
  },
});
