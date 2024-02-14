import { useEffect, useState } from "react";

let globalState: Record<string, any> = {};
let listeners: React.Dispatch<React.SetStateAction<{}>>[] = [];
let actions: Record<string, any> = {};

export type Store = {
  authentication: {
    isAuthenticated: boolean;
  };
  counter: {
    counter: number;
  };
};

export type Payload<T> = Record<keyof T, any>;

export function useSelector(selectorFn: (state: Record<string, any>) => any) {
  const setValue = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setValue);

    return () => {
      listeners = listeners.filter((listener) => listener !== setValue);
    };
  }, []);

  return selectorFn(globalState);
}

// ability to dispatch action (type and payload)
export function useDispatch<T, V>(action: T, payload: Payload<V>) {
  globalState;
  // manipulate global state using action
  // call setvalue for each listener
}

export function createSlice<T, V>(initialState: T, reducers: V) {
  globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...reducers };
}
