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
    updateScrappedDate: (state, action) => {
      const today = new Date().toDateString()
      state.posts = state.posts.map( post => {
        if(post.source === action.paylod) {
          return {...post, dateScrapped: today } 
        } else {
          return post
        }
      }) 
    }
  }
})

export const { posts, updateScrappedDate } = postSlice.actions
export default postSlice.reducer
