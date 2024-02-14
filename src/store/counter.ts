import { createSlice } from ".";

type CounterState = {
  counter: number;
};

type CounterActions = {
  increment: (state: CounterState) => {
    counter: number;
  };
  decrement: (state: CounterState) => {
    counter: number;
  };
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

createSlice<CounterState, CounterActions>(
  INITIAL_COUNTER_STATE,
  counterMutators
);
