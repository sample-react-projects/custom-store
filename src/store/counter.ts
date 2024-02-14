import { createSlice } from ".";

const INITIAL_COUNTER_STATE = {
  counter: 0,
};

export const counterSlice = createSlice<typeof INITIAL_COUNTER_STATE>(
  "counter",
  INITIAL_COUNTER_STATE,
  {
    increment: (state) => {
      return { counter: (state.counter += 1) };
    },
    decrement: (state) => {
      return { counter: (state.counter -= 1) };
    },
  }
);