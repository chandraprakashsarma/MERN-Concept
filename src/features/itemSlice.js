import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch items
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const res = await axios.get("http://localhost:5000/api/items");
  return res.data;
});

// Add item
export const addItem = createAsyncThunk("items/addItem", async (name) => {
  const res = await axios.post("http://localhost:5000/api/items", { name });
  return res.data;
});

const itemSlice = createSlice({
  name: "items",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch items";
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default itemSlice.reducer;
