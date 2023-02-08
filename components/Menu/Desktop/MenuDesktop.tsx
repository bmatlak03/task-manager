"use client";
import {
  Box,
  BoxProps,
  List,
  ListProps,
  styled,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { StyledMenuItem } from "../Styled";
import { BoardIcon, Logo, PlusIcon } from "assets/icons";
import { ThemeControl } from "components/ThemeControl";
import { Subtitle } from "components/UI/Typography";
import { ModalContent } from "constants/ModalContent";
import { useAppDispatch } from "store";
import { selectAllBoards, selectCurrentBoard } from "store/boardSlice";
import { setIsModalVisible, setModalContent } from "store/uiSlice";

interface MenuDesktopProps {}

const HeaderBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: 20,
  padding: "20px 16px",
  height: "64px",
  alignItems: "center",
}));

const MenuContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  paddingRight: "20px",
  borderRight: `2px solid ${theme.palette.secondary.main}`,
  height: "100vh",
}));

const MenuList = styled(List)<ListProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "50px",
}));

const MenuWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "calc(100% - 64px)",
  justifyContent: "space-between",
}));

export const MenuDesktop = ({}: MenuDesktopProps) => {
  const selectedBoard = useSelector(selectCurrentBoard);
  const allBoards = useSelector(selectAllBoards);

  const dispatch = useAppDispatch();

  const handleAddBoard = () => {
    dispatch(setModalContent(ModalContent.ADD_BOARD));
    dispatch(setIsModalVisible(true));
  };

  return (
    <MenuContainer>
      <HeaderBox>
        <Logo />
        <Typography fontWeight={700} fontSize={25} letterSpacing={2}>
          kanban
        </Typography>
      </HeaderBox>
      <MenuWrapper>
        <MenuList>
          <Subtitle
            pl="16px"
            letterSpacing={2.4}
            textTransform="uppercase"
            color="primary.dark"
          >
            All boards ({allBoards.length})
          </Subtitle>
          {allBoards.map((board) => (
            <StyledMenuItem
              key={board.name}
              selected={board.name === selectedBoard?.name}
              onClick={() => board.name}
            >
              <BoardIcon /> <span>{board.name}</span>
            </StyledMenuItem>
          ))}
          <StyledMenuItem
            sx={{ color: "primary.main" }}
            onClick={handleAddBoard}
          >
            <BoardIcon />{" "}
            <span>
              <PlusIcon /> Create New Board
            </span>
          </StyledMenuItem>
        </MenuList>
        <Box pl="20px" justifySelf="flex-end" pb="20px">
          <ThemeControl />
        </Box>
      </MenuWrapper>
    </MenuContainer>
  );
};
