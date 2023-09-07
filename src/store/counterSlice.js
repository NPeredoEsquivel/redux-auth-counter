import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement(state) {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    increaseByAmount(state, action) {
      return {
        ...state,
        value: state.value + action.payload.amount,
      };
    },
    toggleCounter(state) {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    },
  },
});

export const { increment, decrement, increaseByAmount, toggleCounter } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
