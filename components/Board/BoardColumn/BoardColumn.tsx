"use client";
import {
  Box,
  BoxProps,
  Card,
  CardActionArea,
  CardProps,
  List,
  ListProps,
  styled,
  Typography,
} from "@mui/material";
import { BoardColumn as BoardColumnType } from "types";

interface BoardColumnProps {
  columnData: BoardColumnType;
  dotColor: string;
}

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "280px",
  minHeight: "88px",
  padding: "16px",
  gap: "8px",
  borderRadius: "10px",
}));

const Dot = styled(Box)<BoxProps>(({ theme }) => ({
  width: "15px",
  height: "15px",
  borderRadius: "50%",
}));

const TitleContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: "280px",
}));

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const BoardColumn = ({ columnData, dotColor }: BoardColumnProps) => {
  return (
    <Box>
      <TitleContainer>
        <Dot bgcolor={dotColor} />
        <Typography
          fontWeight="bold"
          fontSize={12}
          lineHeight="15.12px"
          letterSpacing={2.4}
          textTransform="uppercase"
          color="primary.dark"
        >
          {columnData.name} ({columnData.tasks.length})
        </Typography>
      </TitleContainer>

      <StyledList>
        {columnData.tasks.map((task) => (
          <CardActionArea key={task.title}>
            <StyledCard>
              <Typography fontSize={15} lineHeight="18.9px" fontWeight="bold">
                {task.title}
              </Typography>
              <Typography
                fontWeight="bold"
                fontSize={12}
                lineHeight="15.12px"
                color="primary.dark"
              >
                {task.description}
              </Typography>
            </StyledCard>
          </CardActionArea>
        ))}
      </StyledList>
    </Box>
  );
};
