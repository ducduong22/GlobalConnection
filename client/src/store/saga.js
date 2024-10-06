import { all } from "redux-saga/effects";
import postSaga from "../container/post/postSaga";
import commentSaga from "../container/comment/commentSaga";
import postDetailSaga from "../container/post/postDetailSaga";
import userSaga from "../container/Login/userSaga";
import userIdSaga from "../container/post/userIdSaga";
import groupSaga from "../container/groups/groupSaga";
import printingSaga from "../container/menu/ThreePrintingSaga";
import programmingSaga from "../container/menu/ProgrammingSaga";
import technewSaga from "../container/menu/TechnewsSaga";
import artificialSaga from "../container/menu/ArtificialSaga";

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
    // Add other sagas here
  ]);
}

export default rootSaga;
