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

export type Action<T> = {
  type: string;
  payload: Record<keyof T, any>;
};

export function createSlice<T>(
  name: string,
  initialState: T,
  reducers: Record<string, (state: T, action?: Action<T>) => T>
) {}

export const store = configureStore<Store>({
  reducer: { authentication: authenticationReducers, counter: counterReducers },
});
