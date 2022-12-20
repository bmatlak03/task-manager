import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export enum PaletteMode {
  LIGHT = "light",
  DARK = "dark",
}
interface SliceState {
  theme: PaletteMode;
}

const initialState: SliceState = {
  theme: PaletteMode.LIGHT,
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    toggleTheme(state) {
      if (state.theme === PaletteMode.LIGHT) {
        localStorage.setItem("theme", PaletteMode.DARK);
        state.theme = PaletteMode.DARK;
      } else {
        localStorage.setItem("theme", PaletteMode.LIGHT);
        state.theme = PaletteMode.LIGHT;
      }
    },
    setThemeMode(state, { payload }: PayloadAction<any>) {
      state.theme = payload;
    },
  },
});

export const selectThemeMode = ({ themeSlice }: RootState) => {
  return themeSlice.theme;
};
export const { toggleTheme, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
