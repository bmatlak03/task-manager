import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import boardSlice from "./boardSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
    boardSlice,
    uiSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
