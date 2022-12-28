import { Box, BoxProps, Button, ButtonProps, styled } from "@mui/material";

export const ModalButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: 15,
  textTransform: "none",
  fontWeight: "bold",
}));

export const FieldWrapper = styled(Box)<BoxProps>(() => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  width: "100%",
}));
