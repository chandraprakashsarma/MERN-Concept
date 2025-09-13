import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});
