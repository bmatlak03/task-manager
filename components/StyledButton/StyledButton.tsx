"use client";
import { Button, ButtonProps, styled } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 15,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
