import prisma from 'lib/prisma'
import { NextResponse } from 'next/server'

type RouteParams = {
  boardId: string
}

export async function GET(request: Request, context: { params: RouteParams }) {
  const { params } = context

  const board = await prisma?.board.findUnique({
    where: {
      id: params.boardId,
    },
    include: {
      columns: {
        include: {
          cards: {
            orderBy: {
              votes: 'desc',
            },
          },
        },
      },
    },
  })

  return NextResponse.json(board)
}
