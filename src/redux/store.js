import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "email",
    "userInfo",
    "rememberMe",
    "token",
    "betTypes",
    "balance",
    "airtimeOptions",
  ],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
