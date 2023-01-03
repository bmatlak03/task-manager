import { AppDispatch } from "store";
import { setBoardsData } from "store/boardSlice";

const headers = {
  "Content-Type": "application/json",
};

export const fetchBoards = () => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const response = await fetch("api/getBoards");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong when fetching boards");
      }
      return data;
    };
    try {
      const boardsData = await sendRequest();
      dispatch(setBoardsData(boardsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBoard = (boardName: string, columns: string[]) => {
  return async (dispatch: AppDispatch) => {
    const sendRequest = async () => {
      const response = await fetch("api/createBoard", {
        method: "POST",
        body: JSON.stringify({
          boardName,
          columns,
        }),
        headers,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong when creating board");
      }
      return data;
    };
    try {
      const result = await sendRequest();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};
