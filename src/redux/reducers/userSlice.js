import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from '../../services/user.js'
import errorMessage from '../../utils/errorMessage.js'
import { notify } from './notificationSlice.js'

const initialState = {
  loading: false,
  user: null,
}

export const loginFromStorage = createAsyncThunk(
  'user/loginFromStorage',
  async ({ token }, thunkAPI) => {
    try {
      const response = await userService.authenticate(token)
      return token
    } catch (error) {
      const message = errorMessage(error)
      thunkAPI.dispatch(notify({ message, _status: 'error' }))
      window.localStorage.removeItem('user')
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginFromStorage.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})

export const { login } = userSlice.actions
export default userSlice.reducer
