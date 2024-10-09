import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../store/post/postSlice";
import commentReducer from "../store/comment/commentSlice";
import postDetailReducer from "../store/post/postDetailSlice";
import userReducer from "./login/userSlice";
import userIdReducer from "../store/post/userIdSlice";
import searchReducer from "../store/post/postSlice";
import groupReducer from "../store/groups/groupSlice";
import printingReducer from "../store/menu/ThreeDPrintingSlice";
import programmingReducer from "../store/menu/ProgrammingSlice";
import technewReducer from "../store/menu/TechNewsSlice";
import artificialReducer from "../store/menu/ArtificialSlice";

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
});

export default rootReducer;
