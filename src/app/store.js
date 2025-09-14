import { configureStore } from "@reduxjs/toolkit";
import reactConceptReducer from "../components/features/reactConceptSlice";

export const store = configureStore({
  reducer: {
    reactConcepts: reactConceptReducer,
  },
});
