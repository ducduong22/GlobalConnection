// import { call, put, takeEvery } from "redux-saga/effects";
// import {
//   fetch3DPrintingRequest,
//   fetch3DPrintingSuccess,
//   fetch3DPrintingFailure,
//   fetchProgrammingRequest,
//   fetchProgrammingSuccess,
//   fetchProgrammingFailure,
//   fetchTechNewsRequest,
//   fetchTechNewsSuccess,
//   fetchTechNewsFailure,
//   fetchArtificialIntelligenceRequest,
//   fetchArtificialIntelligenceSuccess,
//   fetchArtificialIntelligenceFailure,
// } from "./categorySlice";

// import {
//   getArtificial,
//   getProgramming,
//   getTechNews,
//   getThreePrinting,
// } from "../../store/api";
// // Replace with your actual API call function or mock data function

// // Replace with your actual API call function or mock data function
// const fetchPostsFromAPI = (category) => {
//   // Simulate fetching data from an API or use your actual API call
//   if (category === "3DPrinting") {
//     return getThreePrinting;
//   } else if (category === "programming") {
//     return getProgramming;
//   } else if (category === "techNews") {
//     return getTechNews;
//   } else if (category === "Artificial Intelligence") {
//     return getArtificial;
//   } else {
//     return [];
//   }
// };

// function* fetchPosts(action) {
//   const { category } = action.payload;
//   try {
//     // Simulate API call or use actual async function
//     const posts = yield call(fetchPostsFromAPI, category);

//     // Dispatch success action with received data
//     switch (category) {
//       case "3DPrinting":
//         yield put(fetch3DPrintingSuccess(posts));
//         break;
//       case "programming":
//         yield put(fetchProgrammingSuccess(posts));
//         break;
//       case "techNews":
//         yield put(fetchTechNewsSuccess(posts));
//         break;
//       case "Artificial Intelligence":
//         yield put(fetchArtificialIntelligenceSuccess(posts));
//         break;
//       default:
//         break;
//     }
//   } catch (error) {
//     // Dispatch failure action if API call fails
//     switch (category) {
//       case "3DPrinting":
//         yield put(fetch3DPrintingFailure(error.message));
//         break;
//       case "programming":
//         yield put(fetchProgrammingFailure(error.message));
//         break;
//       case "techNews":
//         yield put(fetchTechNewsFailure(error.message));
//         break;
//       case "Artificial Intelligence":
//         yield put(fetchArtificialIntelligenceFailure(error.message));
//         break;
//       default:
//         break;
//     }
//   }
// }

// function* categorySaga() {
//   yield takeEvery(
//     [
//       fetch3DPrintingRequest.type,
//       fetchProgrammingRequest.type,
//       fetchTechNewsRequest.type,
//       fetchArtificialIntelligenceRequest.type,
//     ],
//     fetchPosts
//   );
// }

// export default categorySaga;
