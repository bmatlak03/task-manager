"use client";
import { Box, BoxProps, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "store/boardSlice";
import { BoardColumn } from "./BoardColumn";

interface BoardProps {}

const BoardContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: "24px",
  padding: "24px 16px",
  overflow: "scroll",
  height: "calc(100vh - 64px)",
}));

export const Board = ({}: BoardProps) => {
  const selectedBoard = useSelector(selectCurrentBoard);
  return (
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
    </BoardContainer>
  );
};
