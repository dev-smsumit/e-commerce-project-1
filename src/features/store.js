import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/allSlices/counterSlice'

export const store = configureStore({
  reducer: {
    count : counterSlice,
  },
})