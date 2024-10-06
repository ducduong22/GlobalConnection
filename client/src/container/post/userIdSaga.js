import { getUserId } from "../../store/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { setUserIdSuccess, setUserIdFailed, setUserId } from "./userIdSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* loadUsers() {
  try {
    const uID = yield call(getUserId);
    yield put(setUserIdSuccess(uID));
  } catch (error) {
    yield put(setUserIdFailed());
  }
}

function* userIdSaga() {
  yield takeLatest(setUserId.type, loadUsers);
}

export default userIdSaga;
