import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

export const store = configureStore({
   red
   ucer: {
      counter: counterReducer
      
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch