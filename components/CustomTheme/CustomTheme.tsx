"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../constants/Theme";
import { useAppDispatch } from "../../store";
import {
  PaletteMode,
  selectThemeMode,
  setThemeMode,
} from "../../store/themeSlice";

export default function CustomTheme({ children }: PropsWithChildren) {
  const mode = useSelector(selectThemeMode);

  const theme = createTheme({
    palette: {
      mode,
      primary: colors.primary[mode],
      secondary: colors.secondary[mode],
      background: colors.background[mode],
      error: colors.error,
    },
    typography: {
      fontFamily: ["Plus Jakarta Sans"].join(","),
    },
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", PaletteMode.LIGHT);
    }
    const storageTheme = localStorage.getItem("theme") as PaletteMode;
    dispatch(setThemeMode(storageTheme));
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
