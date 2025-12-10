import { configureStore } from "@reduxjs/toolkit";

import surveysReducer from "./slices/surveys.slice";

const store = configureStore({
  reducer: {
    surveys: surveysReducer,
  },
});

export default store;
