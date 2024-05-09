import { configureStore } from "@reduxjs/toolkit";
import getMoviesSlice from "./get-movie/get-movies-slice";

export const store = configureStore({
  reducer: {
    movies: getMoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
