import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data from backend
export const fetchReactConcepts = createAsyncThunk(
  "reactConcepts/fetchReactConcepts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/reactconcepts");
    return response.data; // array of objects
  }
);

const reactConceptSlice = createSlice({
  name: "reactConcepts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReactConcepts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReactConcepts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchReactConcepts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reactConceptSlice.reducer;
