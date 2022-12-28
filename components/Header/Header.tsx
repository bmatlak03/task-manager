"use client";
import { Button, Menu } from "@mui/material";
import { BoardIcon, ChevronDown, DotsIcon, Logo, PlusIcon } from "assets/icons";
import { useState } from "react";
import { boardData } from "constants/BoardData";
import {
  LogoButton,
  StyledButton,
  StyledHeader,
  StyledMenuItem,
} from "./styled";
import { ThemeControl } from "components/ThemeControl";
import { useAppDispatch } from "store";
import { changeBoard, selectCurrentBoard } from "store/boardSlice";
import { useSelector } from "react-redux";
import { Caption } from "components/UI/Typography";
import { setIsModalVisible, setModalContent } from "store/uiSlice";
import { ModalContent } from "constants/ModalContent";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const selectedBoard = useSelector(selectCurrentBoard);
  const dispatch = useAppDispatch();

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (name: string) => {
    dispatch(changeBoard(name));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddTask = () => {
    dispatch(setModalContent(ModalContent.ADD_TASK));
    dispatch(setIsModalVisible(true));
  };

  const handleAddBoard = () => {
    dispatch(setModalContent(ModalContent.ADD_BOARD));
    dispatch(setIsModalVisible(true));
  };

  const menuListStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px 16px 0",
    gap: "6px",
  };

  return (
    <StyledHeader position="sticky">
      <Logo />
      <LogoButton onClick={handleClickListItem}>
        <span>{selectedBoard.name}</span>{" "}
        <ChevronDown direction={isOpen ? "down" : "up"} />
      </LogoButton>
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

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        sx={{
          background: "rgba(0,0,0,0.3)",
        }}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
          sx: menuListStyles,
        }}
      >
        <Caption pl="16px" letterSpacing={2.4} textTransform="uppercase">
          All boards ({boardData.length})
        </Caption>
        {boardData.map((board) => (
          <StyledMenuItem
            key={board.name}
            selected={board.name === selectedBoard.name}
            onClick={() => handleMenuItemClick(board.name)}
          >
            <BoardIcon /> <span>{board.name}</span>
          </StyledMenuItem>
        ))}
        <StyledMenuItem sx={{ color: "primary.main" }} onClick={handleAddBoard}>
          <BoardIcon />{" "}
          <span>
            <PlusIcon /> Create New Board
          </span>
        </StyledMenuItem>
        <ThemeControl />
      </Menu>
    </StyledHeader>
  );
};
