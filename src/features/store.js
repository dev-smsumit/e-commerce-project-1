import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/allSlices/counterSlice'
import { productApi } from './Apis/productApis'

export const store = configureStore({
  reducer: {
    count : counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})