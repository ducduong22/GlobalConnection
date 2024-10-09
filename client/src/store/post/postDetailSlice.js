import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  postdetail: [],
  loading: false,
  error: "",
};

export const postdetailSlice = createSlice({
  name: "postdetail",
  initialState,
  reducers: {
    getPostdetail: (state, action) => {
      state.loading = true;
      state.error = "";
    },
    getPostdetailSuccess: (state, action) => {
      const { payload } = action;
      state.postdetail = payload;
      state.loading = false;
    },
    getPostdetailFailed: (state, action) => {
      const { payload } = action;
      state.postdetail = [];
      state.error = payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPostdetail, getPostdetailSuccess, getPostdetailFailed } =
  postdetailSlice.actions;

export default postdetailSlice.reducer;
