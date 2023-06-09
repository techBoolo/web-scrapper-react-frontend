import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  posts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    posts: (state, action) => {
      state.posts = action.payload
    },
    updateScrappedData: (state, action) => {
      const newPost = action.payload
      state.posts = state.posts.map(post => {
        if(post.source == newPost.source) {
          return newPost
        } else {
          return post
        }
      }) 
    }
  }
})

export const { posts, updateScrappedData } = postSlice.actions
export default postSlice.reducer
