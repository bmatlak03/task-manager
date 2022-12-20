import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
