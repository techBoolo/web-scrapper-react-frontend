import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationSlice.js'

export default configureStore({
  reducer: {
    notification: notificationReducer
  }
})
