import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  printing: [],
  loading: false,
  error: null,
};

const printingSlice = createSlice({
  name: "printing",
  initialState,
  reducers: {
    setPrinting(state) {
      state.loading = true;
    },
    setPrintingSuccess(state, action) {
      state.loading = false;
      state.printing = action.payload;
    },
    setPrintingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setPrinting, setPrintingSuccess, setPrintingFailure } =
  printingSlice.actions;
export const Prin = (state) => state.printing.printing;

export default printingSlice.reducer;
