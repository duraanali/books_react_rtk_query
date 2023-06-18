import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {bookSlice} from './api/BookSlice'

export const store = configureStore({
  reducer: {
    [bookSlice.reducerPath]: bookSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSlice.middleware),
})

setupListeners(store.dispatch)