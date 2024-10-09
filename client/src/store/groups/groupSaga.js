import { getGroup } from "../../store/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { setGroup, setGroupSuccess, setGroupFailed } from "./groupSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchGroup() {
  try {
    const groups = yield call(getGroup);
    yield put(setGroupSuccess(groups));
  } catch (e) {
    yield put(setGroupFailed());
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* groupSaga() {
  yield takeLatest(setGroup.type, fetchGroup);
}

export default groupSaga;
