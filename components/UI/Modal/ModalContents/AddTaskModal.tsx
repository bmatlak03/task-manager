import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { PlusIcon } from "assets/icons";
import { inputPlaceholders } from "constants/Input";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "store/boardSlice";

interface AddTaskModalProps {}

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "24px",
  padding: "24px",
}));

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 15,
  textTransform: "none",
  fontWeight: "bold",
}));

export const AddTaskModal = ({}: AddTaskModalProps) => {
  const currentBoard = useSelector(selectCurrentBoard);

  return (
    <Container>
      <Typography fontWeight="bold" fontSize={18} lineHeight="23px">
        Add New Task
      </Typography>
      <Typography fontWeight="bold" fontSize={12} lineHeight="15px">
        Title
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        placeholder={inputPlaceholders.title}
      />
      <Typography fontWeight="bold" fontSize={12} lineHeight="15px">
        Description
      </Typography>
      <TextField
        variant="outlined"
        multiline
        placeholder={inputPlaceholders.description}
      />
      <Typography fontWeight="bold" fontSize={12} lineHeight="15px">
        Subtasks
      </Typography>
      <StyledButton color="secondary" variant="contained">
        <PlusIcon /> <span style={{ marginLeft: "12px" }}>Add New Subtask</span>
      </StyledButton>
      <FormControl>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status-name"
          value={""}
          onChange={() => {}}
          input={<OutlinedInput label="Status" />}
        >
          {currentBoard.columns.map((column) => (
            <MenuItem key={column.name} value={column.name}>
              {column.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <StyledButton variant="contained">Create Task</StyledButton>
    </Container>
  );
};
