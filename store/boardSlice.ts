import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "types";
import { RootState } from ".";

interface SliceState {
  boardsData: Board[];
  selectedBoard: Board | null;
}

const initialState: SliceState = {
  boardsData: [],
  selectedBoard: null,
};

export const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    changeBoard(state, action) {
      state.selectedBoard =
        state.boardsData.find((board) => board.name === action.payload) ||
        state.boardsData[0];
    },
    setBoardsData(state, { payload }: PayloadAction<Board[]>) {
      state.boardsData = payload;
      state.selectedBoard = payload[0];
    },
  },
});

export const selectCurrentBoard = ({ boardSlice }: RootState) => {
  return boardSlice.selectedBoard;
};

export const selectAllBoards = ({ boardSlice }: RootState) => {
  return boardSlice.boardsData;
};

export const { changeBoard, setBoardsData } = boardSlice.actions;

export default boardSlice.reducer;
