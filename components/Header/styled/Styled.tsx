"use client";
import {
  AppBar,
  AppBarProps,
  Button,
  ButtonProps,
  MenuItem,
  MenuItemProps,
  styled,
} from "@mui/material";

export const StyledHeader = styled(AppBar)<AppBarProps>(({ theme }) => ({
  display: "flex",
  gap: 20,
  padding: "20px 16px",
  height: "64px",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.common.black,
}));

export const LogoButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  gap: "6px",
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.mode === "light" ? "black" : "white",
  textTransform: "none",
  fontSize: "18px",
}));

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  display: "flex",
  gap: "12px",
  color: theme.palette.primary.dark,
  fontWeight: theme.typography.fontWeightBold,
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    color: theme.palette.primary.contrastText,
  },
  "&:hover": {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
}));
