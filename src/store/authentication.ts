import { createSlice } from ".";

type AuthenticationState = {
  isAuthenticated: boolean;
};

type AuthenticationActions = {
  login: () => AuthenticationState;
  logout: () => AuthenticationState;
};

const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
  isAuthenticated: false,
};

const authenticationMutators: AuthenticationActions = {
  login: () => {
    return { isAuthenticated: true };
  },
  logout: () => {
    return { isAuthenticated: false };
  },
};

createSlice<AuthenticationState, AuthenticationActions>(
  INITIAL_AUTHENTICATION_STATE,
  authenticationMutators
);
