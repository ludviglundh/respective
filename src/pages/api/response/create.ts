import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaResponseData } from 'pages/response/[eventId]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { attending, inputs, eventId, name, email, contactId } = JSON.parse(
    req.body
  ) as PrismaResponseData

  const response = await prisma.response.create({
    data: {
      contactId,
      name,
      email,
      attending,
      inputs: {
        create: inputs?.map((input: { id: string; value: string }) => {
          return { inputId: input.id, value: input.value }
        }),
      },
      event: {
        connect: {
          id: eventId,
        },
      },
    },
  })

  res.status(200).json(response)
}
