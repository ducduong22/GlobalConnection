import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  posts: [],
  postId: 0,
  postDetail: null,
  loading: false,
  search: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state) => {
      state.loading = true;
    },
    setPostsSuccess: (state, action) => {
      const { payload } = action;
      const numberOfRandomPosts = 100; // Adjust the number of random posts you want

      // Shuffle the payload array to ensure randomness
      const shuffledPosts = payload.sort(() => Math.random() - 0.5);

      // Select the first n posts from the shuffled array
      const randomPosts = shuffledPosts.slice(0, numberOfRandomPosts);

      state.posts = randomPosts;
      state.loading = false;
    },
    setPostsFailed: (state) => {
      state.posts = [];
      state.loading = false;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    ////////////////////////////////////////////////////
    setPostId: (state, action) => {
      // state.postId = action.payload;
      const { payload } = action;
      state.postId = payload;
    },
    setPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
    addPostRequest: (state) => {
      state.loading = true;
    },
    addPostSuccess: (state, action) => {
      state.posts.push(action.payload);
      state.loading = false;
    },
    deletePostRequest: (state) => {
      state.loading = true;
    },
    deletePostSuccess: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  setPostsSuccess,
  setPostsFailed,
  setPostId,
  setPostDetail,
  setSearch,
  addPostRequest,
  addPostSuccess,
  deletePostRequest,
  deletePostSuccess,
} = postSlice.actions;

export default postSlice.reducer;
