import {
  Card,
  CardActionArea,
  CardProps,
  styled,
  Typography,
} from "@mui/material";
import { Subtitle } from "components/UI/Typography";
import { ModalContent } from "constants/ModalContent";
import { useAppDispatch } from "store";
import {
  setIsModalVisible,
  setModalContent,
  setModalData,
} from "store/uiSlice";
import { Task } from "types";

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

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  const handleTaskClick = (task: Task) => {
    dispatch(setModalContent(ModalContent.VIEW_TASK));
    dispatch(setModalData(task));
    dispatch(setIsModalVisible(true));
  };

  return (
    <CardActionArea key={task.title} onClick={() => handleTaskClick(task)}>
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
