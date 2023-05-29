import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eventId, contactId } = JSON.parse(req.body)

  const response = await prisma.contact.update({
    data: {
      eventId,
      events: {
        connect: {
          id: eventId,
        },
      },
    },
    where: {
      id: contactId,
    },
  })

  res.status(200).json(response)
}
