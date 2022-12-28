import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import { DotsIcon } from "assets/icons";
import { useState } from "react";
import { Task, TaskStatus } from "types";

interface ViewTaskModalProps {
  task: Task;
}

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "24px",
  padding: "24px",
}));

const SubtaskBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: "24px",
  padding: "8px",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
}));

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
}));

export const ViewTaskModal = ({ task }: ViewTaskModalProps) => {
  const [taskStatus, setTaskStatus] = useState(task.status);

  const handleChange = (event: SelectChangeEvent<typeof taskStatus>) => {
    const {
      target: { value },
    } = event;

    setTaskStatus(value as TaskStatus);
  };

  const statusToSet = [TaskStatus.TODO, TaskStatus.DOING, TaskStatus.DONE];

  return (
    <StyledBox>
      <Header>
        <Typography fontWeight="bold" fontSize={18} lineHeight="23px">
          {task.title}
        </Typography>
        <Button
          onClick={() => console.log("dots clicked")}
          sx={{
            padding: "5px",
            minWidth: "unset",
          }}
        >
          <DotsIcon />
        </Button>
      </Header>

      <Typography color="primary.dark" fontSize={13} lineHeight="23px">
        {task.description}
      </Typography>
      {!!task.subtasks.length && (
        <>
          <Typography fontWeight="bold" fontSize={12} lineHeight="15px">
            Subtasks ({task.subtasks.length})
          </Typography>
          {task.subtasks.map((subtask) => (
            <SubtaskBox key={subtask.title}>
              <Checkbox
                size="small"
                checked={subtask.isCompleted}
                onClick={() => console.log("click")}
              />
              <Typography
                sx={{
                  textDecoration: subtask.isCompleted ? "line-through" : "",
                }}
              >
                {subtask.title}
              </Typography>
            </SubtaskBox>
          ))}
        </>
      )}
      <FormControl>
        <InputLabel id="status-label">Current Status</InputLabel>

        <Select
          labelId="status-label"
          id="status-name"
          value={taskStatus}
          onChange={handleChange}
          input={<OutlinedInput label="Current Status" />}
        >
          {statusToSet.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledBox>
  );
};
