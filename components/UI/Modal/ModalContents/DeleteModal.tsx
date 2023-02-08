import { Box, BoxProps, styled, Typography } from "@mui/material";
import { ModalButton } from "./styled/Styled";
import { Title } from "components/UI/Typography";

interface DeleteModalProps {
  type: "board" | "task";
}

const ButtonsContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "12px",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

export const DeleteModal = ({ type }: DeleteModalProps) => {
  const errorMessage = {
    board:
      "Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.",
    task: "Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.",
  };
  const modalButtonStyles = {
    width: { sm: "100%", md: "45%" },
  };
  return (
    <>
      <Title color="error.main">Delete this {type}?</Title>
      <Typography color="primary.dark" fontSize={13} lineHeight="23px">
        {errorMessage[type]}
      </Typography>
      <ButtonsContainer>
        <ModalButton color="error" variant="contained" sx={modalButtonStyles}>
          Delete
        </ModalButton>
        <ModalButton
          color="secondary"
          variant="contained"
          sx={modalButtonStyles}
        >
          Cancel
        </ModalButton>
      </ButtonsContainer>
    </>
  );
};
