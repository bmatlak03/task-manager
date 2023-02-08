import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    boardName: string;
    columns: string[];
  };
}
export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { boardName, columns } = req.body;
    console.log(boardName, columns);

    const boards = await prisma.board.create({
      data: {
        name: boardName,
        columns: {
          createMany: {
            data: columns.map((column: string) => ({ name: column })),
          },
        },
      },
    });
    res.status(200).json(boards);
  }
}
