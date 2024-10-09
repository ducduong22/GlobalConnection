import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artificial: [],
  loading: false,
  error: null,
};

const artificialSlice = createSlice({
  name: "artificial",
  initialState,
  reducers: {
    setArtificial(state) {
      state.loading = true;
      state.error = null;
    },
    setArtificialSuccess(state, action) {
      state.loading = false;
      state.artificial = action.payload;
    },
    setArtificialFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setArtificial, setArtificialSuccess, setArtificialFailure } =
  artificialSlice.actions;
export const Arti = (state) => state.artificial.artificial;
export default artificialSlice.reducer;
