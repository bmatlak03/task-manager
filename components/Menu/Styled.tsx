import { MenuItem, MenuItemProps, styled } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  display: "flex",
  gap: "12px",
  color: theme.palette.primary.dark,
  fontWeight: theme.typography.fontWeightBold,
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    color: theme.palette.primary.contrastText,
  },
  "&:hover": {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
}));
