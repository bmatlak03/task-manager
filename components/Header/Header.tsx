"use client";
import { Button, Menu, Typography } from "@mui/material";
import {
  BoardIcon,
  ChevronDown,
  DotsIcon,
  Logo,
  PlusIcon,
} from "../../assets/icons";
import { useState } from "react";
import ThemeControl from "../ThemeControl/ThemeControl";
import { LogoButton, StyledHeader, StyledMenuItem } from "./styled";
import { StyledButton } from "../StyledButton/StyledButton";

const boards = ["Platform Launch", "Marketing Plan", "Roadmap"];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const isOpen = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuListStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "16px 24px 16px 0",
    gap: "6px",
  };

  return (
    <StyledHeader position="static">
      <Logo />
      <LogoButton onClick={handleClickListItem}>
        <span>{boards[selectedIndex]}</span>{" "}
        <ChevronDown direction={isOpen ? "down" : "up"} />
      </LogoButton>
      <StyledButton
        onClick={() => console.log("plus clicked")}
        sx={{
          padding: 0,
          width: "48px",
          height: "32px",
          ml: "auto",
        }}
      >
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
        <Typography
          color="primary.dark"
          fontWeight="bold"
          pl="16px"
          fontSize={12}
          lineHeight="15.12px"
          letterSpacing={2.4}
          textTransform="uppercase"
        >
          All boards ({boards.length})
        </Typography>
        {boards.map((board, index) => (
          <StyledMenuItem
            key={board}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            <BoardIcon /> <span>{board}</span>
          </StyledMenuItem>
        ))}
        <ThemeControl />
      </Menu>
    </StyledHeader>
  );
}
