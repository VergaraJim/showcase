import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    value: 0,
  },
  reducers: {
    test: (state) => {
      state.value += 1;
    },
  },
});

export const { test } = mainSlice.actions;
const mainReducer = mainSlice.reducer;
export default mainReducer;
