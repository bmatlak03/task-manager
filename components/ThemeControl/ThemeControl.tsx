"use client";
import { Box, BoxProps, styled, Switch } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useAppDispatch } from "../../store";
import {
  PaletteMode,
  selectThemeMode,
  toggleTheme,
} from "../../store/themeSlice";
import { useSelector } from "react-redux";

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  width: "100%",
  borderRadius: 5,
  marginLeft: "12px",
  marginTop: "24px",
  color: theme.palette.primary.dark,
}));

export default function ThemeControl() {
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
}
