import { all } from "redux-saga/effects";
import postSaga from "../store/post/postSaga";
import commentSaga from "../store/comment/commentSaga";
import postDetailSaga from "../store/post/postDetailSaga";
import userSaga from "./login/userSaga";
import userIdSaga from "../store/post/userIdSaga";
import groupSaga from "../store/groups/groupSaga";
import printingSaga from "../store/menu/ThreePrintingSaga";
import programmingSaga from "../store/menu/ProgrammingSaga";
import technewSaga from "../store/menu/TechnewsSaga";
import artificialSaga from "../store/menu/ArtificialSaga";

function* rootSaga() {
  yield all([
    postSaga(),
    commentSaga(),
    postDetailSaga(),
    userSaga(),
    userIdSaga(),
    groupSaga(),
    printingSaga(),
    programmingSaga(),
    technewSaga(),
    artificialSaga(),
  ]);
}

export default rootSaga;
