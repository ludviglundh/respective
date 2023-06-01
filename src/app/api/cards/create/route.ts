import prisma from 'lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { content, columnId } = await req.json()

  const board = await prisma?.card.create({
    data: {
      content,
      columnId,
    },
  })

  return NextResponse.json(board)
}
