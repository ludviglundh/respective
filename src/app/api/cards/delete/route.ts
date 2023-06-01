import prisma from 'lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id } = await req.json()

  const board = await prisma?.card.delete({
    where: {
      id,
    },
  })

  return NextResponse.json(board)
}
