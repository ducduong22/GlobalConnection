// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "post",
    "comment",
    "postdetail",
    "user",
    "search",
    "group",
    "printing",
    "artificial",
    "programming",
    "technew",
    "uesrId",
  ],
  // Bạn có thể thêm bất kỳ cấu hình redux-persist nào khác tại đây.
  // Ví dụ: bạn có thể muốn thêm `danh sách trắng` hoặc `danh sách đen` để duy trì có chọn lọc các phần của trạng thái.
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
  // Add any middleware or enhancers here
});

sagaMiddleware.run(rootSaga);

// Create a persistor instance
export const persistor = persistStore(store);
