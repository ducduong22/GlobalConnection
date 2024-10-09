import { getPostDetailAPI } from "../../store/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getPostdetail,
  getPostdetailSuccess,
  getPostdetailFailed,
} from "./postDetailSlice";

function* fetchPostDetail({ payload: id }) {
  try {
    const postdetail = yield call(() => getPostDetailAPI(id));
    // là 1 cái action
    console.log(postdetail);
    yield put(getPostdetailSuccess(postdetail));
  } catch (error) {
    yield put(getPostdetailFailed("There is something wrong on the server"));
  }
}

// hung action tu comment reduce
function* postDetailSaga() {
  yield takeLatest(getPostdetail.type, fetchPostDetail);
}

export default postDetailSaga;
