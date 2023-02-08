// Fetch function
import { useQuery } from "@tanstack/react-query";
import { fetchBoards } from "./fetchFunctions";
import { useAppDispatch } from "store";
import { setBoardsData } from "store/boardSlice";
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
