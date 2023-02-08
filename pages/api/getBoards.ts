import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const boards = await prisma.board.findMany({
      include: {
        columns: {
          include: {
            tasks: {
              include: {
                subtasks: true,
              },
            },
          },
        },
      },
    });
    console.log(boards);
    res.status(200).json(boards);
  }
}
