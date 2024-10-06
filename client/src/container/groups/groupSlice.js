import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  groups: [],
  commutiesId: 0,
  groupsDetail: null,
  loading: false,
  search: "",
};

export const groupSlice = createSlice({
  name: " group",
  initialState,
  reducers: {
    setGroup: (state) => {
      state.loading = true;
    },
    setGroupSuccess: (state, action) => {
      const { payload } = action;

      state.groups = payload;
      state.loading = false;
    },
    setGroupFailed: (state) => {
      state.groups = [];
      state.loading = false;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    ////////////////////////////////////////////////////
    // setPostId: (state, action) => {
    //   // state.postId = action.payload;
    //   const { payload } = action;
    //   state.postId = payload;
    // },
    // setPostDetail: (state, action) => {
    //   state.postDetail = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGroup,
  setGroupSuccess,
  setGroupFailed,
  //   setPostId,
  //   setPostDetail,
  setSearch,
} = groupSlice.actions;

export default groupSlice.reducer;
