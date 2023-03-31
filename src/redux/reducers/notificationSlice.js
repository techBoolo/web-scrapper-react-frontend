import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const notify = createAsyncThunk(
  'notification/notify',
  async (params, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(reset())
    }, 5000)
    return params
  }
)

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { data: null },
  reducers: {
    reset: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(notify.fulfilled, (state, action) => {
        state.data = action.payload
      })
  }
})

export const { reset } = notificationSlice.actions
export default notificationSlice.reducer
