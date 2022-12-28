import { useState } from "react";
import { IconButton, TextField, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { PlusIcon } from "assets/icons";
import { inputPlaceholders } from "constants/Input";
import { FieldWrapper, ModalButton } from "./styled/Styled";
import { Subtitle } from "components/UI/Typography";

interface AddBoardModalProps {}

type NewColumn = {
  id: number;
  name: string;
};

export const AddBoardModal = ({}: AddBoardModalProps) => {
  const [columns, setColumns] = useState<NewColumn[]>([]);

  const handleAddColumn = () => {
    setColumns((prevState) => [
      ...columns,
      {
        id: prevState.length === 0 ? 0 : prevState[prevState.length - 1].id + 1,
        name: "",
      },
    ]);
  };

  const handleRemoveColumn = (id: number) =>
    setColumns((prevState) => prevState.filter((column) => column.id !== id));

  return (
    <>
      <Typography fontWeight="bold" fontSize={18} lineHeight="23px">
        Add New Task
      </Typography>
      <Subtitle>Board Name</Subtitle>
      <TextField
        variant="outlined"
        size="small"
        placeholder={inputPlaceholders.title}
      />
      <Subtitle>Board Columns</Subtitle>
      {columns.map((column) => (
        <FieldWrapper key={column.id}>
          <TextField
            variant="outlined"
            size="small"
            placeholder={inputPlaceholders.title}
            value={column.name}
            fullWidth
          />
          <IconButton onClick={() => handleRemoveColumn(column.id)}>
            <CloseIcon />
          </IconButton>
        </FieldWrapper>
      ))}
      <ModalButton
        color="secondary"
        variant="contained"
        onClick={handleAddColumn}
      >
        <PlusIcon /> <span style={{ marginLeft: "12px" }}>Add New Column</span>
      </ModalButton>
      <ModalButton variant="contained">Create New Board</ModalButton>
    </>
  );
};
