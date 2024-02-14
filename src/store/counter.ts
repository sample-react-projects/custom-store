import { createSlice } from ".";

type CounterState = {
  counter: number;
};

const INITIAL_COUNTER_STATE: CounterState = {
  counter: 0,
};

const counterMutators = {
  increment: (state: CounterState) => {
    return { counter: (state.counter += 1) };
  },
  decrement: (state: CounterState) => {
    return { counter: (state.counter -= 1) };
  },
};

export const counterSlice = createSlice<typeof INITIAL_COUNTER_STATE>(
  "counter",
  INITIAL_COUNTER_STATE,
  counterMutators
);

export type counterActions = keyof typeof counterMutators;
