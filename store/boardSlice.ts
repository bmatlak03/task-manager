import { createSlice } from "@reduxjs/toolkit";
import { boardData } from "constants/BoardData";
import { RootState } from ".";

const initialState = {
  selectedBoard: boardData[0],
};

export const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    changeBoard(state, action) {
      state.selectedBoard =
        boardData.find((board) => board.name === action.payload) ||
        boardData[0];
    },
  },
});

export const selectCurrentBoard = ({ boardSlice }: RootState) => {
  return boardSlice.selectedBoard;
};
export const { changeBoard } = boardSlice.actions;

export default boardSlice.reducer;
