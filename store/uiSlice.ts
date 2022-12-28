import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalContent } from "constants/ModalContent";
import { RootState } from "store";
import { Task } from "types";

interface SliceState {
  isVisible: boolean;
  modalContent: ModalContent;
  modalData: Task | null;
}

const initialState: SliceState = {
  isVisible: false,
  modalContent: ModalContent.IDLE,
  modalData: null,
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setModalContent(state, { payload }: PayloadAction<ModalContent>) {
      state.modalContent = payload;
    },
    setIsModalVisible(state, { payload }: PayloadAction<boolean>) {
      state.isVisible = payload;
    },
    setModalData(state, { payload }: PayloadAction<Task | null>) {
      state.modalData = payload;
    },
    resetModalState(state) {
      state.isVisible = false;
      state.modalContent = ModalContent.IDLE;
      state.modalData = null;
    },
  },
});

export const selectModalContent = ({ uiSlice }: RootState) =>
  uiSlice.modalContent;

export const selectIsModalVisible = ({ uiSlice }: RootState) =>
  uiSlice.isVisible;

export const selectModalData = ({ uiSlice }: RootState) => uiSlice.modalData;

export const {
  setIsModalVisible,
  setModalContent,
  setModalData,
  resetModalState,
} = uiSlice.actions;

export default uiSlice.reducer;
