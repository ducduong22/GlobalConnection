import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./userSlice";
import axios from "axios";
const loginApi = (credentials) =>
  axios.post("http://localhost:3002/login", credentials);
const registerApi = (userData) =>
  axios.post("http://localhost:3002/register", userData);

// Worker Sagas
function* handleLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess(response.data));
    // Lưu token vào localStorage
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    yield put(loginFailure(error.response.data.message));
  }
}

function* handleRegister(action) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(registerSuccess(response.data));
    // Lưu token vào localStorage
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    yield put(registerFailure(error.response.data.message));
  }
}

function* registerSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}

export default registerSaga;
