import { takeLatest, call, put } from "redux-saga/effects";
import {
  setArtificial,
  setArtificialSuccess,
  setArtificialFailure,
} from "./ArtificialSlice";
import { getArtificial } from "../../store/api";

function* fetchArtificial() {
  try {
    const response = yield call(getArtificial);
    console.log(response);
    yield put(setArtificialSuccess(response));
  } catch (e) {
    yield put(setArtificialFailure());
  }
}

function* artificialSaga() {
  yield takeLatest(setArtificial.type, fetchArtificial);
}
export default artificialSaga;
