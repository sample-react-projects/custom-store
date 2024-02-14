import { useEffect, useState } from "react";

export type Store = {
  authentication: {
    isAuthenticated: boolean;
  };
  counter: {
    counter: number;
  };
};

let globalState: any = {};
let listeners: React.Dispatch<React.SetStateAction<any>>[] = [];
let actions: Record<string, any> = {};

export type Payload<T> = Record<keyof T, any>;

export function useSelector<T, V>(selectorFn: (state: T) => V) {
  const setValue = useState<T>(globalState)[1];

  useEffect(() => {
    listeners.push(setValue);

    return () => {
      listeners = listeners.filter((listener) => listener !== setValue);
    };
  }, []);

  return selectorFn(globalState as T);
}

export function dispatch<T extends keyof typeof actions, V>(
  slice: keyof Store,
  action: T,
  payload?: Payload<V>
) {
  const newState = actions[slice][action](globalState[slice], payload);
  globalState[slice] = { ...globalState[slice], ...newState };

  listeners.forEach((listener) => listener({ ...globalState }));
}

export function createSlice<T, V>(
  name: keyof Store,
  initialState: T,
  reducers: V
) {
  globalState[name] = initialState;
  actions[name] = reducers;
}
