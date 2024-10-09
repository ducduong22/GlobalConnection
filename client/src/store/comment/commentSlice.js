import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  comments: [],
  loading: false,
  error: "",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state) => {
      state.loading = true;
    },
    setCommentsSuccess: (state, action) => {
      const { payload } = action;
      state.comments = payload;
      state.loading = false;
    },
    setCommentsFailed: (state) => {
      state.comments = [];
      state.loading = false;
    },

    addCommentRequest: (state) => {
      state.loading = true;
    },
    addCommentSuccess: (state, action) => {
      state.comments.push(action.payload);
      state.loading = false;
    },
    deleteCommentRequest: (state) => {
      state.loading = true;
    },
    deleteCommentSuccess: (state, action) => {
      state.comments = state.comments.filter(
        (post) => post.id !== action.payload
      );
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setComments,
  setCommentsSuccess,
  setCommentsFailed,
  addCommentRequest,
  addCommentSuccess,
  deleteCommentRequest,
  deleteCommentSuccess,
} = commentSlice.actions;

export default commentSlice.reducer;
