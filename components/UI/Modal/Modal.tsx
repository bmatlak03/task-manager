import { Box, BoxProps, Modal as MUIModal, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledModal = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
  width: "80vw",
  maxWidth: "700px",
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
