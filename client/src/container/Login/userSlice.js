import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  userId: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userId = action.payload.user._id;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} = userSlice.actions;

export default userSlice.reducer;
