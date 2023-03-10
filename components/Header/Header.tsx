"use client";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LogoButton, StyledButton, StyledHeader } from "./styled";
import { ChevronDown, DotsIcon, Logo, PlusIcon } from "assets/icons";
import { MenuMobile } from "components/Menu/Mobile";
import { ModalContent } from "constants/ModalContent";
import { useAppDispatch } from "store";
import { selectCurrentBoard } from "store/boardSlice";
import { setIsModalVisible, setModalContent } from "store/uiSlice";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const selectedBoard = useSelector(selectCurrentBoard);
  const dispatch = useAppDispatch();

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddTask = () => {
    dispatch(setModalContent(ModalContent.ADD_TASK));
    dispatch(setIsModalVisible(true));
  };

  return (
    <StyledHeader position="sticky">
      {!matches && <Logo />}
      {matches ? (
        <Typography fontWeight={700} fontSize={20} color="contrastText">
          {selectedBoard?.name ?? "None"}
        </Typography>
      ) : (
        <LogoButton onClick={handleClickListItem}>
          <span>{selectedBoard?.name ?? "None"}</span>{" "}
          <ChevronDown direction={isOpen ? "down" : "up"} />
        </LogoButton>
      )}
      <StyledButton onClick={handleAddTask} variant="contained">
        <PlusIcon />
      </StyledButton>

      <Button
        onClick={() => console.log("dots clicked")}
        sx={{
          padding: "5px",
          minWidth: "unset",
        }}
      >
        <DotsIcon />
      </Button>

      <MenuMobile
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        isOpen={isOpen}
      />
    </StyledHeader>
  );
};
