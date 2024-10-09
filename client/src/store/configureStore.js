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
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
