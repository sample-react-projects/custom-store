import { createSlice } from ".";

type AuthenticationState = {
  isAuthenticated: boolean;
};

type AuthenticationMutations = {
  login: () => AuthenticationState;
  logout: () => AuthenticationState;
};

export type AuthenticationActions = keyof AuthenticationMutations;
export type AuthenticationPayload = Partial<AuthenticationState>;

const INITIAL_AUTHENTICATION_STATE: AuthenticationState = {
  isAuthenticated: false,
};

const authenticationMutators: AuthenticationMutations = {
  login: () => {
    return { isAuthenticated: true };
  },
  logout: () => {
    return { isAuthenticated: false };
  },
};

export function createAuthenticationSlice() {
  createSlice<AuthenticationState, AuthenticationMutations>(
    "authentication",
    INITIAL_AUTHENTICATION_STATE,
    authenticationMutators
  );
}
