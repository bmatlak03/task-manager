import { Close as CloseIcon } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PlusIcon } from "assets/icons";
import { Subtitle } from "components/UI/Typography";
import { inputPlaceholders } from "constants/Input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "store/boardSlice";
import { FieldWrapper, ModalButton } from "./styled/Styled";

interface AddTaskModalProps {}

type NewSubtask = {
  id: number;
  name: string;
};

export const AddTaskModal = ({}: AddTaskModalProps) => {
  const [subtasks, setSubtasks] = useState<NewSubtask[]>([]);
  const currentBoard = useSelector(selectCurrentBoard);

  const handleAddSubtask = () => {
    setSubtasks((prevState) => [
      ...subtasks,
      {
        id: prevState.length === 0 ? 0 : prevState[prevState.length - 1].id + 1,
        name: "",
      },
    ]);
  };

  const handleRemoveSubtask = (id: number) =>
    setSubtasks((prevState) =>
      prevState.filter((subtask) => subtask.id !== id)
    );

  return (
    <>
      <Typography fontWeight="bold" fontSize={18} lineHeight="23px">
        Add New Task
      </Typography>
      <Subtitle>Title</Subtitle>
      <TextField
        variant="outlined"
        size="small"
        placeholder={inputPlaceholders.title}
      />
      <Subtitle>Description</Subtitle>
      <TextField
        variant="outlined"
        multiline
        placeholder={inputPlaceholders.description}
      />
      <Subtitle>Subtasks</Subtitle>
      {subtasks.map((subtask) => (
        <FieldWrapper>
          <TextField
            variant="outlined"
            size="small"
            placeholder={inputPlaceholders.title}
            value={subtask.name}
            fullWidth
          />
          <IconButton onClick={() => handleRemoveSubtask(subtask.id)}>
            <CloseIcon />
          </IconButton>
        </FieldWrapper>
      ))}
      <ModalButton
        color="secondary"
        variant="contained"
        onClick={handleAddSubtask}
      >
        <PlusIcon /> <span style={{ marginLeft: "12px" }}>Add New Subtask</span>
      </ModalButton>
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
      <ModalButton variant="contained">Create Task</ModalButton>
    </>
  );
};
