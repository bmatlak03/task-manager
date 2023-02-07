// Fetch function
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "store";
import { setBoardsData } from "store/boardSlice";
import { fetchBoards } from "./fetchFunctions";
// Types

export const useFetchBoards = () => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ["boards"],
    queryFn: () =>
      fetchBoards().then((data) => {
        dispatch(setBoardsData(data));
        return data;
      }),
    refetchOnWindowFocus: true,
  });
};
