import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  userID: [],
  loading: false,
  selectedUserId: null,
};

export const userIdSlice = createSlice({
  name: "userId",
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setUserId: (state) => {
      state.loading = true;
    },
    setUserIdSuccess: (state, action) => {
      const { payload } = action;
      state.userID = payload;
      state.loading = false;
    },
    setUserIdFailed: (state) => {
      state.userID = [];
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserIdSuccess,
  setUserIdFailed,
  setUserId,
  setSelectedUserId,
} = userIdSlice.actions;
export default userIdSlice.reducer;
