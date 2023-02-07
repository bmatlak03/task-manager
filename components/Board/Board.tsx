"use client";
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
import { BoardContainer, CenteredBox, NewColumnButton } from "./Styled";

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
