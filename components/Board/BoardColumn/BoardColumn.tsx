"use client";
import { Box, CardActionArea, Typography } from "@mui/material";
import { Caption } from "components/UI/Typography";
import { BoardColumn as BoardColumnType } from "types";
import { Dot, StyledCard, StyledList, TitleContainer } from "./styled";

interface BoardColumnProps {
  columnData: BoardColumnType;
  dotColor: string;
}

export const BoardColumn = ({ columnData, dotColor }: BoardColumnProps) => {
  return (
    <Box>
      <TitleContainer>
        <Dot bgcolor={dotColor} />
        <Caption letterSpacing={2.4} textTransform="uppercase">
          {columnData.name} ({columnData.tasks.length})
        </Caption>
      </TitleContainer>

      <StyledList>
        {columnData.tasks.map((task) => (
          <CardActionArea key={task.title}>
            <StyledCard>
              <Typography fontSize={15} lineHeight="18.9px" fontWeight="bold">
                {task.title}
              </Typography>
              {task.description && <Caption>{task.description}</Caption>}
            </StyledCard>
          </CardActionArea>
        ))}
      </StyledList>
    </Box>
  );
};
