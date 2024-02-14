import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducers } from "./authentication";
import { counterReducers } from "./counter";

export type Store = {
  authentication: {
    isAuthenticated: boolean;
  };
  counter: {
    counter: number;
  };
};

export const store = configureStore<Store>({
  reducer: { authentication: authenticationReducers, counter: counterReducers },
});
