import { configureStore } from "@reduxjs/toolkit";
import reactConceptReducer from "../components/features/reactConceptSlice";
import authReducer from "../components/features/authSlice";

export const store = configureStore({
  reducer: {
    reactConcepts: reactConceptReducer,
    auth: authReducer,
  },
});
