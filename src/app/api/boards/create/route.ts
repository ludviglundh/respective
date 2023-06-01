import prisma from 'lib/prisma'
import { FormFields } from 'components/board/CreateBoard/Form'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { id, name, description, columns, inviteLink } =
    (await req.json()) as FormFields

  const board = await prisma?.board.create({
    data: {
      id,
      name,
      description,
      inviteLink,
      columns: {
        create: columns.map(({ title, description }) => ({
          title,
          description,
        })),
      },
    },
  })

  return NextResponse.json(board)
}
