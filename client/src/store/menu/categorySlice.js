// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentPosts: [],
//   loading: false,
//   error: null,
// };

// const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   reducers: {
//     fetch3DPrintingRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetch3DPrintingSuccess: (state, action) => {
//       state.currentPosts = action.payload;
//       state.loading = false;
//     },
//     fetch3DPrintingFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     fetchProgrammingRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchProgrammingSuccess: (state, action) => {
//       state.currentPosts = action.payload;
//       state.loading = false;
//     },
//     fetchProgrammingFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     fetchTechNewsRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchTechNewsSuccess: (state, action) => {
//       state.currentPosts = action.payload;
//       state.loading = false;
//     },
//     fetchTechNewsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     fetchArtificialIntelligenceRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchArtificialIntelligenceSuccess: (state, action) => {
//       state.currentPosts = action.payload;
//       state.loading = false;
//     },
//     fetchArtificialIntelligenceFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
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
// } = categorySlice.actions;

// export const selectCategory = (state) => state.category;

// export default categorySlice.reducer;
