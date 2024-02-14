import { createSlice } from ".";

type AuthenticationState = {
  isAuthenticated: boolean;
};

const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
  isAuthenticated: false,
};

const authenticationMutators = {
  login: () => {
    return { isAuthenticated: true };
  },
  logout: () => {
    return { isAuthenticated: false };
  },
};

export const authenticationSlice = createSlice<AuthenticationState>(
  "authentication",
  INITIAL_AUTHENTICATION_STATE,
  authenticationMutators
);

export type authenticationActions = keyof typeof authenticationMutators;
