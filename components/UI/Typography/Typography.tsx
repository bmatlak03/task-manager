"use client";
import { styled, Typography, TypographyProps } from "@mui/material";

export const Caption = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 12,
  lineHeight: "15.12px",
  color: theme.palette.primary.dark,
}));
