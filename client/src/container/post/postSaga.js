import { getPost, addPost, deletePost } from "../../store/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  setPosts,
  setPostsSuccess,
  setPostsFailed,
  addPostSuccess,
  deletePostSuccess,
  addPostRequest,
  deletePostRequest,
} from "./postSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchPost() {
  try {
    const posts = yield call(getPost);
    yield put(setPostsSuccess(posts));
  } catch (e) {
    yield put(setPostsFailed());
  }
}
function* addNewPost(action) {
  try {
    const newPost = yield call(addPost, action.payload);
    yield put(addPostSuccess(newPost));
  } catch (e) {
    console.error("Failed to add post:", e);
  }
}

// Worker saga: deletes a post
function* removePost(action) {
  try {
    yield call(deletePost, action.payload);
    yield put(deletePostSuccess(action.payload));
  } catch (e) {
    console.error("Failed to delete post:", e);
  }
}
function* postSaga() {
  yield takeLatest(setPosts.type, fetchPost);
  yield takeLatest(addPostRequest.type, addNewPost);
  yield takeLatest(deletePostRequest.type, removePost);
}

export default postSaga;
