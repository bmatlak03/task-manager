"use client";
import { Box, BoxProps, Button, ButtonProps, styled } from "@mui/material";
import { Modal } from "components/UI/Modal";
import { Title } from "components/UI/Typography";
import {
  AddBoardModal,
  AddTaskModal,
  DeleteModal,
  ViewTaskModal,
} from "components/UI/Modal/ModalContents";
import { ModalContent } from "constants/ModalContent";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { selectCurrentBoard } from "store/boardSlice";
import {
  resetModalState,
  selectIsModalVisible,
  selectModalContent,
  selectModalData,
} from "store/uiSlice";
import { BoardColumn } from "./BoardColumn";
import { ModalButton } from "components/UI/Modal/ModalContents/styled/Styled";
import { PlusIcon } from "assets/icons";
import { useFetchBoards } from "api/fetchHooks";

const BoardContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  gap: "24px",
  padding: "24px 16px",
  overflow: "scroll",
  height: "calc(100vh - 64px)",
  width: "100%",
}));

const CenteredBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "24px",
  width: "100%",
}));

const NewColumnButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  gap: "12px",
  width: "280px",
  textTransform: "none",
  fontSize: "26px",
  fontWeight: "bold",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light,
  color: theme.palette.primary.dark,
}));

export const Board = () => {
  const selectedBoard = useSelector(selectCurrentBoard);
  const isModalVisible = useSelector(selectIsModalVisible);
  const modalData = useSelector(selectModalData);
  const modalContent = useSelector(selectModalContent);
  const dispatch = useAppDispatch();

  const { isLoading, isError } = useFetchBoards();

  const handleModalClose = () => dispatch(resetModalState());
  const handleAddColumn = () => {};

  return (
    <BoardContainer>
      {!selectedBoard?.columns.length && (
        <CenteredBox>
          {!isLoading && !selectedBoard && !isError && (
            <>
              <Title color="primary.dark" textAlign="center">
                This board is empty. Create a new column to get started
              </Title>
              <ModalButton variant="contained" onClick={handleAddColumn}>
                <PlusIcon />{" "}
                <span style={{ marginLeft: "12px" }}>Add New Column</span>
              </ModalButton>
            </>
          )}
          {isLoading && <div>Loading...</div>}
          {isError && <div>Something went wrong!</div>}
        </CenteredBox>
      )}
      {selectedBoard?.columns.map((columnData) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return (
          <BoardColumn
            columnData={columnData}
            key={columnData.name}
            dotColor={`#${randomColor}`}
          />
        );
      })}
      {!isLoading && selectedBoard && !isError && (
        <NewColumnButton>
          <PlusIcon /> New Column
        </NewColumnButton>
      )}
      <Modal isOpen={isModalVisible} onClose={handleModalClose}>
        {modalContent === ModalContent.VIEW_TASK && modalData && (
          <ViewTaskModal task={modalData} />
        )}
        {modalContent === ModalContent.ADD_TASK && <AddTaskModal />}
        {modalContent === ModalContent.ADD_BOARD && <AddBoardModal />}
        {/* should be dynamic value from slice */}
        {modalContent === ModalContent.DELETE && <DeleteModal type="board" />}
      </Modal>
    </BoardContainer>
  );
};
