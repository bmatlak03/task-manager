import { Box, BoxProps, Button, ButtonProps, styled } from "@mui/material";

export const BoardContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  gap: "24px",
  padding: "24px 16px",
  overflow: "scroll",
  height: "calc(100vh - 64px)",
  width: "100%",
}));

export const CenteredBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  width: "100%",
}));

export const NewColumnButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  gap: "12px",
  width: "280px",
  minWidth: "180px",
  textTransform: "none",
  fontSize: "26px",
  fontWeight: "bold",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light,
  color: theme.palette.primary.dark,
}));
