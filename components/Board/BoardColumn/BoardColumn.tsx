"use client";
import { Box } from "@mui/material";
import { Dot, StyledList, TitleContainer } from "./styled";
import { TaskCard } from "components/TaskCard";
import { Subtitle } from "components/UI/Typography";
import { BoardColumn as BoardColumnType } from "types";

interface BoardColumnProps {
  columnData: BoardColumnType;
  dotColor: string;
}

export const BoardColumn = ({ columnData, dotColor }: BoardColumnProps) => {
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
              <TaskCard key={task.id} task={task} />
            ))}
        </StyledList>
      </Box>
    </>
  );
};
