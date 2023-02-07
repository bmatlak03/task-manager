"use client";
import { Box } from "@mui/material";
import { TaskCard } from "components/TaskCard";
import { Subtitle } from "components/UI/Typography";
import { ModalContent } from "constants/ModalContent";
import { useAppDispatch } from "store";
import {
  setIsModalVisible,
  setModalContent,
  setModalData,
} from "store/uiSlice";
import { BoardColumn as BoardColumnType, Task } from "types";
import { Dot, StyledList, TitleContainer } from "./styled";

interface BoardColumnProps {
  columnData: BoardColumnType;
  dotColor: string;
}

export const BoardColumn = ({ columnData, dotColor }: BoardColumnProps) => {
  const dispatch = useAppDispatch();

  const handleTaskClick = (task: Task) => {
    dispatch(setModalContent(ModalContent.VIEW_TASK));
    dispatch(setModalData(task));
    dispatch(setIsModalVisible(true));
  };
  return (
    <>
      <Box>
        <TitleContainer>
          <Dot bgcolor={dotColor} />
          <Subtitle letterSpacing={2.4} textTransform="uppercase">
            {columnData.name} ()
            {/* {!!columnData.tasks.length && columnData.tasks.length}) */}
          </Subtitle>
        </TitleContainer>

        <StyledList>
          {columnData.tasks &&
            columnData.tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                handleClick={handleTaskClick}
              />
            ))}
        </StyledList>
      </Box>
    </>
  );
};
