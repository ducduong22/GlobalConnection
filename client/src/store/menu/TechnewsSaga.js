import { takeLatest, call, put } from "redux-saga/effects";
import {
  setTechNew,
  setTechNewSuccess,
  setTechNewFailure,
} from "./TechNewsSlice";
import { getTechNews } from "../../store/api";

function* fetchTechNew() {
  try {
    const response = yield call(getTechNews);
    yield put(setTechNewSuccess(response));
  } catch (e) {
    yield put(setTechNewFailure());
  }
}

function* techNewSaga() {
  yield takeLatest(setTechNew.type, fetchTechNew);
}
export default techNewSaga;
