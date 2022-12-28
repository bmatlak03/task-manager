"use client";
import { styled, Typography, TypographyProps } from "@mui/material";

export const Subtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 12,
  lineHeight: "15.12px",
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 18,
  lineHeight: "23px",
}));
