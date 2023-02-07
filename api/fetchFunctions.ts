import { Board } from "types";

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error!");

  const data = await response.json();

  return data;
};

// Fetch functions
export const fetchBoards = async (): Promise<Board[]> => {
  return await basicFetch<Board[]>("api/getBoards");
};
