import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducers = counterSlice.reducer;
