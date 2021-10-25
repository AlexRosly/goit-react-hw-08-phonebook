import { configureStore, createReducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
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
import { contactApi } from "./contactSlice";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";
import authOperations from "./auth/auth-operations";

//for refresh page
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const error = createReducer(null, {
  [authOperations.register.pending]: () => null,
  [authOperations.register.rejected]: (_, payload) => payload,
  [authOperations.logIn.pending]: () => null,
  [authOperations.logIn.rejected]: (_, payload) => payload,
  [authOperations.logOut.pending]: () => null,
  [authOperations.logOut.rejected]: (_, payload) => payload,
  [authOperations.reFreshCurrentPage.pending]: () => null,
  [authOperations.reFreshCurrentPage.rejected]: (_, payload) => payload,
});

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    error: error,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);
const persistor = persistStore(store);

export default { store, persistor };
