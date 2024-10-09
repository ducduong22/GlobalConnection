import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  technew: [],
  loading: false,
  error: null,
};

const techNewSlice = createSlice({
  name: "technew",
  initialState,
  reducers: {
    setTechNew(state) {
      state.loading = true;
      state.error = null;
    },
    setTechNewSuccess(state, action) {
      state.loading = false;
      state.technew = action.payload;
    },
    setTechNewFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setTechNew, setTechNewSuccess, setTechNewFailure } =
  techNewSlice.actions;
export const Technew = (state) => state.technew.technew;

export default techNewSlice.reducer;
