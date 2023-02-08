import { Close as CloseIcon } from "@mui/icons-material";
import { IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldWrapper, ModalButton } from "./styled/Styled";
import { PlusIcon } from "assets/icons";
import { Subtitle } from "components/UI/Typography";
import { inputPlaceholders } from "constants/Input";

interface AddBoardModalProps {}

type NewColumn = {
  id: string;
  name: string;
};

export const AddBoardModal = ({}: AddBoardModalProps) => {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState<NewColumn[]>([]);

  const handleAddColumn = () => {
    setColumns((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        name: "",
      },
    ]);
  };

  const handleRemoveColumn = (id: string) =>
    setColumns((prevState) => prevState.filter((column) => column.id !== id));

  const handleChangeColumnName = (id: string, value: string) => {
    setColumns((prevState) =>
      prevState.map((column) => {
        if (column.id === id) return { ...column, name: value };
        return column;
      })
    );
  };

  return (
    <>
      <Typography fontWeight="bold" fontSize={18} lineHeight="23px">
        Add New Board
      </Typography>
      <Subtitle>Board Name</Subtitle>
      <TextField
        variant="outlined"
        size="small"
        placeholder={inputPlaceholders.title}
        value={boardName}
        onChange={({ target }) => setBoardName(target.value)}
      />
      <Subtitle>Board Columns</Subtitle>
      {columns.map((column) => (
        <FieldWrapper key={column.id}>
          <TextField
            variant="outlined"
            size="small"
            placeholder={inputPlaceholders.title}
            value={column.name}
            onChange={({ target }) =>
              handleChangeColumnName(column.id, target.value)
            }
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
