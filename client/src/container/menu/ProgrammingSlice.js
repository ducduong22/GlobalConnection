import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  programming: [],
  loading: false,
  error: null,
};

const programmingSlice = createSlice({
  name: "programming",
  initialState,
  reducers: {
    setProgramming(state) {
      state.loading = true;
      state.error = null;
    },
    setProgrammingSuccess(state, action) {
      state.loading = false;
      state.programming = action.payload;
    },
    setProgrammingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProgramming, setProgrammingSuccess, setProgrammingFailure } =
  programmingSlice.actions;
export const Pro = (state) => state.programming.programming;

export default programmingSlice.reducer;
