"use client";
import { StyledButton } from "../components/StyledButton/StyledButton";
import { useAppDispatch } from "../store";
import { toggleTheme } from "../store/themeSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const handleChangeTheme = () => dispatch(toggleTheme());
  return (
    <div>
      <StyledButton onClick={handleChangeTheme}>xD</StyledButton>
    </div>
  );
}
