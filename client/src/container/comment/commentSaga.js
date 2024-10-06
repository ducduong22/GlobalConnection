import { call, put, takeLatest } from "redux-saga/effects";
import {
  setComments,
  setCommentsSuccess,
  setCommentsFailed,
  addCommentRequest,
  addCommentSuccess,
  deleteCommentRequest,
  deleteCommentSuccess,
} from "./commentSlice";
import { getComments, addComment, deleteComment } from "../../store/api"; // Assuming api.js has the necessary API functions

function* fetchComments() {
  try {
    const response = yield call(getComments);
    const comments = response.data; // Extract the necessary data
    yield put(setCommentsSuccess(comments));
  } catch (e) {
    yield put(setCommentsFailed());
  }
}

function* addNewComment(action) {
  try {
    const response = yield call(addComment, action.payload);
    const newComment = response.data; // Extract the necessary data
    yield put(addCommentSuccess(newComment));
  } catch (e) {
    console.error("Failed to add commnet:", e);
  }
}

function* removeComment(action) {
  try {
    yield call(deleteComment, action.payload);
    yield put(deleteCommentSuccess(action.payload));
  } catch (e) {
    console.error("Failed to delete comment:", e);
  }
}
// hung action tu comment reduce
function* commentSaga() {
  yield takeLatest(setComments.type, fetchComments);
  yield takeLatest(addCommentRequest.type, addNewComment);
  yield takeLatest(deleteCommentRequest.type, removeComment);
}

export default commentSaga;
