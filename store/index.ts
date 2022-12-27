import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import boardSlice from "./boardSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
    boardSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
