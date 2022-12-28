"use client";
import { Box, BoxProps, styled } from "@mui/material";
import { Modal } from "components/UI/Modal";
import { AddTaskModal, ViewTaskModal } from "components/UI/Modal/ModalContents";
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

const BoardContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  gap: "24px",
  padding: "24px 16px",
  overflow: "scroll",
  height: "calc(100vh - 64px)",
}));

export const Board = () => {
  const selectedBoard = useSelector(selectCurrentBoard);
  const isModalVisible = useSelector(selectIsModalVisible);
  const modalData = useSelector(selectModalData);
  const modalContent = useSelector(selectModalContent);

  const dispatch = useAppDispatch();

  const handleModalClose = () => dispatch(resetModalState());

  return (
    <>
      <BoardContainer>
        {selectedBoard.columns.map((columnData) => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <BoardColumn
              columnData={columnData}
              key={columnData.name}
              dotColor={`#${randomColor}`}
            />
          );
        })}
        <Modal isOpen={isModalVisible} onClose={handleModalClose}>
          {modalContent === ModalContent.VIEW_TASK && modalData && (
            <ViewTaskModal task={modalData} />
          )}
          {modalContent === ModalContent.ADD_TASK && <AddTaskModal />}
        </Modal>
      </BoardContainer>
    </>
  );
};
