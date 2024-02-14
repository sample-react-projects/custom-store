import { createSlice } from ".";

type CounterState = {
  counter: number;
};

type CounterMutations = {
  increment: (state: CounterState) => {
    counter: number;
  };
  decrement: (state: CounterState) => {
    counter: number;
  };
};

export type CounterActions = keyof CounterMutations;
export type CounterPayload = Partial<CounterState>;

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

export function createCounterSlice() {
  createSlice<CounterState, CounterMutations>(
    "counter",
    INITIAL_COUNTER_STATE,
    counterMutators
  );
}
