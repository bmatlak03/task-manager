"use client";
import { Box, BoxProps, List, ListProps, styled } from "@mui/material";

export const Dot = styled(Box)<BoxProps>(({ theme }) => ({
  width: "15px",
  height: "15px",
  borderRadius: "50%",
}));

export const TitleContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: "280px",
}));

export const StyledList = styled(List)<ListProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));
