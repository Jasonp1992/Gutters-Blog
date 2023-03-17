import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPostsAsync = createAsyncThunk(
  "posts/fetchAll",
  async () => {
    const { data } = await axios.get("/api/posts");
    return data;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPostsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectPosts = (state) => state.posts;

export default postSlice.reducer;
