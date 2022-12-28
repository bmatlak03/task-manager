"use client";
import { Box, CardActionArea, Typography } from "@mui/material";
import { Subtitle } from "components/UI/Typography";
import { ModalContent } from "constants/ModalContent";
import { useAppDispatch } from "store";
import {
  setIsModalVisible,
  setModalContent,
  setModalData,
} from "store/uiSlice";
import { BoardColumn as BoardColumnType, Task } from "types";
import { Dot, StyledCard, StyledList, TitleContainer } from "./styled";

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
            {columnData.name} ({columnData.tasks.length})
          </Subtitle>
        </TitleContainer>

        <StyledList>
          {columnData.tasks.map((task) => (
            <CardActionArea
              key={task.title}
              onClick={() => handleTaskClick(task)}
            >
              <StyledCard>
                <Typography fontSize={15} lineHeight="18.9px" fontWeight="bold">
                  {task.title}
                </Typography>
                {task.description && (
                  <Subtitle color="primary.dark">{task.description}</Subtitle>
                )}
              </StyledCard>
            </CardActionArea>
          ))}
        </StyledList>
      </Box>
    </>
  );
};
