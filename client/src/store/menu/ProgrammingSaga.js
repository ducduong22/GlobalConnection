import { takeLatest, call, put } from "redux-saga/effects";
import {
  setProgramming,
  setProgrammingSuccess,
  setProgrammingFailure,
} from "./ProgrammingSlice";
import { getProgramming } from "../../store/api";

function* fetchProgramming() {
  try {
    const response = yield call(getProgramming);
    yield put(setProgrammingSuccess(response));
  } catch (e) {
    yield put(setProgrammingFailure());
  }
}

function* programmingSaga() {
  yield takeLatest(setProgramming.type, fetchProgramming);
}
export default programmingSaga;
