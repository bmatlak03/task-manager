import { Box, BoxProps, Modal as MUIModal, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledModal = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "80vw",
  maxWidth: "480px",
  height: "100%",
  gap: "24px",
  padding: "24px",
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
}));

interface IModal {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ isOpen, children, onClose }: IModal) => {
  return (
    <MUIModal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "grid",
        placeContent: "center",
      }}
    >
      <StyledModal>{children}</StyledModal>
    </MUIModal>
  );
};
