import { configureStore } from "@reduxjs/toolkit";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import surveysReducer from "./slices/surveys.slice";
import productsReducer from "./slices/products.slice";

const persistConfig = { key: "ari-redux", storage };
const persistedReducers = persistCombineReducers(persistConfig, {
  surveys: surveysReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: persistedReducers,
});

export const persistedStore = persistStore(store);

export default store;
