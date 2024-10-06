import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../container/post/postSlice";
import commentReducer from "../container/comment/commentSlice";
import postDetailReducer from "../container/post/postDetailSlice";
import userReducer from "../container/Login/userSlice";
import userIdReducer from "../container/post/userIdSlice";
import searchReducer from "../container/post/postSlice";
import groupReducer from "../container/groups/groupSlice";
import printingReducer from "../container/menu/ThreeDPrintingSlice";
import programmingReducer from "../container/menu/ProgrammingSlice";
import technewReducer from "../container/menu/TechNewsSlice";
import artificialReducer from "../container/menu/ArtificialSlice";

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  postdetail: postDetailReducer,
  user: userReducer,
  search: searchReducer,
  group: groupReducer,
  printing: printingReducer,
  programming: programmingReducer,
  technew: technewReducer,
  artificial: artificialReducer,
  userId: userIdReducer,
  // add other reducers here
});

export default rootReducer;
