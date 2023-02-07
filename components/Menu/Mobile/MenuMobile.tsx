import { Box, Menu } from "@mui/material";
import { BoardIcon, PlusIcon } from "assets/icons";
import { ThemeControl } from "components/ThemeControl";
import { Subtitle } from "components/UI/Typography";
import { ModalContent } from "constants/ModalContent";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import {
  changeBoard,
  selectAllBoards,
  selectCurrentBoard,
} from "store/boardSlice";
import { setIsModalVisible, setModalContent } from "store/uiSlice";
import { StyledMenuItem } from "../Styled";

const menuListStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "16px 24px 16px 0",
  gap: "6px",
};

interface MenuMobileProps {
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}

export const MenuMobile = ({
  isOpen,
  anchorEl,
  setAnchorEl,
}: MenuMobileProps) => {
  const dispatch = useAppDispatch();

  const allBoards = useSelector(selectAllBoards);
  const selectedBoard = useSelector(selectCurrentBoard);

  const handleMenuItemClick = (name: string) => {
    dispatch(changeBoard(name));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddBoard = () => {
    dispatch(setModalContent(ModalContent.ADD_BOARD));
    dispatch(setIsModalVisible(true));
  };

  return (
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
      <Subtitle pl="16px" letterSpacing={2.4} textTransform="uppercase">
        All boards ({allBoards.length})
      </Subtitle>
      {allBoards.map((board) => (
        <StyledMenuItem
          key={board.name}
          selected={board.name === selectedBoard?.name}
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
      <Box pl={"24px"}>
        <ThemeControl />
      </Box>
    </Menu>
  );
};
