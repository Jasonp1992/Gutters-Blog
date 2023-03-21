import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store';

// Define a type for the slice state

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    category: string;
    description: string;
    createdAt: string;
}

interface AddBlogInfo {
    title: string;
    imgRef: string;
    category: string;
    description: string;
}

// Define the initial state using that type
const initialState: BlogInfo[] = []

export const fetchAllPostsAsync = createAsyncThunk(
  'posts/fetchAll',
  async () => {
    const { data } = await axios.get('/api/posts')
    return data
  }
)

export const newPostAsync = createAsyncThunk(
  'posts/newPost',
  async ({ title, imgRef, category, description }: AddBlogInfo) => {
    const { data } = await axios.post('/api/posts/addPost', {
      title,
      category,
      imgRef,
      description,
    })
    return data
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPostsAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(newPostAsync.fulfilled, (state, action) => {
      state.push(action.payload)
    })
  },
})

export const selectPosts = (state: RootState) => state.posts

export default postSlice.reducer
