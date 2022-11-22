import { configureStore } from "@reduxjs/toolkit";
import  favoriteReducer  from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  }
});

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch;