import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/reactconcepts";

// ✅ Fetch All Concepts
export const fetchConcepts = createAsyncThunk(
  "reactConcepts/fetchConcepts",
  async () => {
    const res = await axios.get(API_URL);
    return res.data;
  }
);

// ✅ Add New Concept
export const addConcept = createAsyncThunk(
  "reactConcepts/addConcept",
  async (newConcept) => {
    const res = await axios.post(API_URL, newConcept);
    return res.data;
  }
);

// ✅ Update Concept
export const updateConcept = createAsyncThunk(
  "reactConcepts/updateConcept",
  async ({ id, updatedConcept }) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedConcept);
    return res.data;
  }
);

// ✅ Delete Concept
export const deleteConcept = createAsyncThunk(
  "reactConcepts/deleteConcept",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; // सिर्फ id return करेंगे ताकि state से remove हो जाए
  }
);

const reactConceptSlice = createSlice({
  name: "reactConcepts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Fetch
      .addCase(fetchConcepts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConcepts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchConcepts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ✅ Add
      .addCase(addConcept.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // ✅ Update
      .addCase(updateConcept.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      // ✅ Delete
      .addCase(deleteConcept.fulfilled, (state, action) => {
        state.items = state.items.filter((c) => c._id !== action.payload);
      });
  },
});

export default reactConceptSlice.reducer;
