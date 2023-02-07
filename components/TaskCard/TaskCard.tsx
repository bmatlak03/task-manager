import {
  Card,
  CardActionArea,
  CardProps,
  styled,
  Typography,
} from "@mui/material";
import { Subtitle } from "components/UI/Typography";
import { Task } from "types";

interface TaskCardProps {
  task: Task;
  handleClick: (task: Task) => void;
}

const StyledCard = styled(Card)<CardProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "280px",
  minHeight: "88px",
  padding: "16px",
  gap: "8px",
  borderRadius: "10px",
  backgroundImage: "none",
}));

export const TaskCard = ({ task, handleClick }: TaskCardProps) => {
  return (
    <CardActionArea key={task.title} onClick={() => handleClick(task)}>
      <StyledCard>
        <Typography fontSize={15} lineHeight="18.9px" fontWeight="bold">
          {task.title}
        </Typography>
        {task.description && (
          <Subtitle color="primary.dark">{task.description}</Subtitle>
        )}
      </StyledCard>
    </CardActionArea>
  );
};
