"use client";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { Box, BoxProps, styled, Switch } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { PaletteMode, selectThemeMode, toggleTheme } from "store/themeSlice";

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  width: "100%",
  borderRadius: 5,
  color: theme.palette.primary.dark,
}));

export const ThemeControl = () => {
  const dispatch = useAppDispatch();
  const themeMode = useSelector(selectThemeMode);
  const handleChangeTheme = () => dispatch(toggleTheme());

  return (
    <StyledBox>
      <LightModeIcon />
      <Switch
        onClick={handleChangeTheme}
        checked={themeMode === PaletteMode.DARK}
      />
      <DarkModeIcon />
    </StyledBox>
  );
};
