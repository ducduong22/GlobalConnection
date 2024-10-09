import { takeLatest, call, put } from "redux-saga/effects";
import {
  setPrinting,
  setPrintingSuccess,
  setPrintingFailure,
} from "./ThreeDPrintingSlice";
import { getThreePrinting } from "../../store/api";

function* fetchPrinting() {
  try {
    const response = yield call(getThreePrinting);
    yield put(setPrintingSuccess(response));
  } catch (e) {
    yield put(setPrintingFailure());
  }
}

function* printingSaga() {
  yield takeLatest(setPrinting.type, fetchPrinting);
}
export default printingSaga;
