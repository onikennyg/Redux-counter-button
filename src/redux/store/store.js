import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'

// when you import counterSlice, the name must change fro counterSlice to CounterReducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})